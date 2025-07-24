// pages/api/dashboard/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import { promises as fs } from 'fs'
import { prisma } from '@/lib/prisma'
import { uploadToS3 } from '@/lib/s3'

// Disable Next.js body parsing so we can use formidable
export const config = { 
  api: { 
    bodyParser: false 
  } 
}

type ResponseData = {
  error: string
  details?: string
} | {
  success: boolean
  messageId: number
  s3Key: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('Upload API called:', req.method)
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST method allowed' })
  }

  try {
    const form = formidable({
      maxFields: 10,
      maxFileSize: 300 * 1024 * 1024, // 300 MB
      maxTotalFileSize: 300 * 1024 * 1024,
      allowEmptyFiles: false,
    })

    console.log('Parsing form data...')
    const [fields, files] = await form.parse(req)

    // Extract userId
    const userIdField = Array.isArray(fields.userId) ? fields.userId[0] : fields.userId
    const userId = Number(userIdField)
    
    if (!userId || isNaN(userId)) {
      return res.status(400).json({ error: 'Chybné userId' })
    }

    console.log('UserId:', userId)

    // Extract recipient
    const recipientField = Array.isArray(fields.recipient) ? fields.recipient[0] : fields.recipient
    const recipient = recipientField && typeof recipientField === 'string' ? recipientField.trim() : ''

    console.log('Recipient:', recipient)

    // Extract file
    const fileField = Array.isArray(files.file) ? files.file[0] : files.file
    
    if (!fileField || !fileField.filepath) {
      return res.status(400).json({ error: 'Soubor nebyl nalezen' })
    }

    console.log('File details:', {
      name: fileField.originalFilename,
      size: fileField.size,
      type: fileField.mimetype,
      path: fileField.filepath
    })

    // Validate file type
    if (!fileField.mimetype || !fileField.mimetype.startsWith('video/')) {
      return res.status(400).json({ error: 'Soubor musí být video' })
    }

    // Validate file size
    if (fileField.size > 300 * 1024 * 1024) {
      return res.status(400).json({ error: 'Soubor je příliš velký (max 300MB)' })
    }

    // Read file into Buffer
    console.log('Reading file buffer...')
    const fileBuffer = await fs.readFile(fileField.filepath)
    
    // Generate unique key for S3
    const fileExtension = fileField.originalFilename?.split('.').pop() || 'mp4'
    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(7)
    const key = `videos/${userId}/${timestamp}-${randomStr}.${fileExtension}`
    
    console.log('Uploading to private S3 with key:', key)
    
    // Upload to S3 (vrátí S3 key, ne URL)
    const s3Key = await uploadToS3(
      fileBuffer, 
      key, 
      fileField.mimetype || 'video/mp4'
    )

    console.log('Private S3 upload completed, key:', s3Key)

    let recipientId = null

    // If recipient name is provided, find or create recipient
    if (recipient) {
      console.log('Finding/creating recipient:', recipient)
      
      let existingRecipient = await prisma.recipient.findFirst({
        where: {
          userId,
          name: recipient
        }
      })

      if (!existingRecipient) {
        existingRecipient = await prisma.recipient.create({
          data: {
            name: recipient,
            userId
          }
        })
        console.log('Created new recipient:', existingRecipient.id)
      } else {
        console.log('Found existing recipient:', existingRecipient.id)
      }

      recipientId = existingRecipient.id
    }

    // Save message to database s S3 KEY (ne URL)
    console.log('Creating message in database...')
    const message = await prisma.message.create({
      data: {
        type: 'VIDEO',
        videoUrl: s3Key, // ULOŽÍME S3 KEY místo URL
        recipientId,
        userId,
      },
      include: {
        recipient: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })

    console.log('Message created:', message.id)

    // Clean up temporary file
    try {
      await fs.unlink(fileField.filepath)
      console.log('Temporary file cleaned up')
    } catch (cleanupError) {
      console.warn('Failed to cleanup temp file:', cleanupError)
    }

    return res.status(201).json({ 
      success: true, 
      messageId: message.id,
      s3Key: s3Key
    })

  } catch (error) {
    console.error('[upload] API error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Neznámá chyba'
    
    // Handle specific errors
    if (error instanceof Error) {
      if (error.message.includes('maxFileSize')) {
        return res.status(400).json({ error: 'Soubor je příliš velký' })
      }
      if (error.message.includes('ENOENT')) {
        return res.status(400).json({ error: 'Soubor nebyl nalezen' })
      }
      if (error.message.includes('S3')) {
        return res.status(500).json({ 
          error: 'Chyba při uploadu do AWS S3',
          details: errorMessage
        })
      }
    }
    
    return res.status(500).json({ 
      error: 'Chyba při nahrávání souboru. Zkuste to prosím znovu.',
      details: errorMessage
    })
  }
}