// pages/api/dashboard/messages.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { getPresignedVideoUrl } from '@/lib/s3'

export type MessageType = 'TEXT' | 'VIDEO'

export type MessagePayload = {
  type: MessageType
  text?: string
  videoUrl?: string
  recipient?: string
  userId: number
}

type MessageCreateData = {
  type: MessageType
  userId: number
  recipientId: number | null
  text?: string
  videoUrl?: string
}

type Data = { error: string; details?: string } | { success: boolean } | unknown

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log('Messages API called:', req.method, 'Query:', req.query)
    
    if (req.method === 'GET') {
      const userId = Number(req.query.userId)
      
      if (!userId || isNaN(userId)) {
        return res.status(400).json({ error: 'Chybné userId' })
      }

      console.log('Loading messages for userId:', userId)

      const msgs = await prisma.message.findMany({
        where: { userId },
        include: {
          recipient: {
            select: {
              id: true,
              name: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
      })
      
      console.log('Found messages:', msgs.length)

      // AUTOMATICKY generovat NOVÉ presigned URLs při každém načtení
      const messagesWithUrls = await Promise.all(
        msgs.map(async (msg) => {
          if (msg.type === 'VIDEO' && msg.videoUrl) {
            try {
              // Generovat nový presigned URL s DLOUHOU platností (7 dní)
              console.log('Generating presigned URL for S3 key:', msg.videoUrl)
              const presignedUrl = await getPresignedVideoUrl(msg.videoUrl, 7 * 24 * 3600) // 7 dní
              
              return {
                ...msg,
                videoUrl: presignedUrl, // Nahradit S3 key presigned URL
                s3Key: msg.videoUrl, // Zachovat původní key pro debug
                urlExpiresAt: new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString()
              }
            } catch (error) {
              console.error('Error generating presigned URL for message:', msg.id, error)
              return {
                ...msg,
                videoUrl: null, // Pokud se nepodaří, video nebude dostupné
                s3Key: msg.videoUrl,
                error: 'Video není dostupné'
              }
            }
          }
          return msg
        })
      )
      
      return res.status(200).json(messagesWithUrls)
    }

    if (req.method === 'POST') {
      const { type, text, videoUrl, recipient, userId: bodyUserId } =
        req.body as MessagePayload

      // Convert userId to number
      const userIdNumber = Number(bodyUserId)

      if (!userIdNumber || isNaN(userIdNumber)) {
        return res.status(400).json({ 
          error: 'Chybné userId v těle požadavku',
          details: `Received: ${bodyUserId}, type: ${typeof bodyUserId}`
        })
      }

      console.log('Creating message:', { type, text: text?.substring(0, 50), videoUrl, recipient, userId: userIdNumber })

      if (type === 'TEXT') {
        if (!text || !text.trim()) {
          return res.status(400).json({ error: 'Text je povinný' })
        }
      } else if (type === 'VIDEO') {
        if (!videoUrl || !videoUrl.trim()) {
          return res.status(400).json({ error: 'Video URL je povinná' })
        }
      } else {
        return res.status(400).json({ error: 'Neplatný typ zprávy' })
      }

      let recipientId = null

      // If recipient name is provided, find or create recipient
      if (recipient && recipient.trim()) {
        const recipientName = recipient.trim()
        
        console.log('Finding/creating recipient:', recipientName, 'for userId:', userIdNumber)
        
        let existingRecipient = await prisma.recipient.findFirst({
          where: {
            userId: userIdNumber,
            name: recipientName
          }
        })

        if (!existingRecipient) {
          console.log('Creating new recipient...')
          existingRecipient = await prisma.recipient.create({
            data: {
              name: recipientName,
              userId: userIdNumber
            }
          })
          console.log('Created recipient:', existingRecipient.id)
        } else {
          console.log('Found existing recipient:', existingRecipient.id)
        }

        recipientId = existingRecipient.id
      }

      const messageData: MessageCreateData = {
        type,
        userId: userIdNumber,
        recipientId,
      }

      if (type === 'TEXT') {
        messageData.text = text!.trim()
      } else {
        messageData.videoUrl = videoUrl!.trim() // Pro VIDEO to bude S3 key
      }

      console.log('Creating message with data:', messageData)

      const created = await prisma.message.create({
        data: messageData,
        include: {
          recipient: {
            select: {
              id: true,
              name: true
            }
          }
        }
      })
      
      console.log('Message created successfully:', created.id)
      return res.status(201).json(created)
    }

    if (req.method === 'DELETE') {
      const { id } = req.body as { id?: number }
      
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID zprávy je povinné' })
      }

      console.log('Deleting message:', id)

      // Check if message exists
      const existingMessage = await prisma.message.findUnique({
        where: { id }
      })

      if (!existingMessage) {
        return res.status(404).json({ error: 'Zpráva nebyla nalezena' })
      }

      // Smazat video z S3 pokud je to video
      if (existingMessage.type === 'VIDEO' && existingMessage.videoUrl) {
        try {
          const { deleteFromS3 } = await import('@/lib/s3')
          await deleteFromS3(existingMessage.videoUrl)
          console.log('Video deleted from S3:', existingMessage.videoUrl)
        } catch (error) {
          console.warn('Failed to delete video from S3:', error)
          // Pokračovat v mazání z DB i když S3 delete selže
        }
      }

      await prisma.message.delete({ 
        where: { id } 
      })
      
      console.log('Message deleted successfully:', id)
      return res.status(200).json({ success: true })
    }

    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    return res.status(405).json({ error: 'Method Not Allowed' })
    
  } catch (error) {
    console.error('[messages] API error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Neznámá chyba'
    
    return res.status(500).json({ 
      error: 'Serverová chyba. Zkuste to prosím znovu.',
      details: errorMessage
    })
  }
}