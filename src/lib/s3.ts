// lib/s3.ts
import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

if (!process.env.AWS_ACCESS_KEY_ID) {
  throw new Error('AWS_ACCESS_KEY_ID is not set in environment variables')
}

if (!process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error('AWS_SECRET_ACCESS_KEY is not set in environment variables')
}

if (!process.env.AWS_REGION) {
  throw new Error('AWS_REGION is not set in environment variables')
}

if (!process.env.S3_BUCKET_NAME) {
  throw new Error('S3_BUCKET_NAME is not set in environment variables')
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

const BUCKET_NAME = process.env.S3_BUCKET_NAME

/**
 * Upload file to S3 (PRIVÁTNÍ bucket) - vrátí S3 key
 */
export async function uploadToS3(
  fileBuffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  try {
    console.log(`Uploading to private S3: ${key}, size: ${fileBuffer.length}, type: ${contentType}`)
    
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
      CacheControl: 'max-age=31536000', // 1 year
    })

    await s3Client.send(command)
    console.log('Private S3 upload successful:', key)
    
    return key
  } catch (error) {
    console.error('Error uploading to S3:', error)
    throw new Error(`Failed to upload file to S3: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Generuje presigned URL pro DOČASNÝ přístup k videu 
 * DŮLEŽITÉ: Tato funkce MUSÍ být exportována
 */
export async function getPresignedVideoUrl(key: string, expiresIn: number = 7 * 24 * 3600): Promise<string> {
  try {
    console.log(`Generating presigned URL for: ${key}, expires in: ${expiresIn}s (${Math.round(expiresIn/3600)}h)`)
    
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    })

    const presignedUrl = await getSignedUrl(s3Client, command, { 
      expiresIn
    })
    
    console.log('Presigned URL generated successfully')
    return presignedUrl
  } catch (error) {
    console.error('Error generating presigned URL:', error)
    throw new Error(`Failed to generate video access URL: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Delete file from S3
 */
export async function deleteFromS3(key: string): Promise<void> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
    })

    await s3Client.send(command)
    console.log('S3 delete successful:', key)
  } catch (error) {
    console.error('Error deleting from S3:', error)
    throw new Error(`Failed to delete file from S3: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

/**
 * Extract S3 key from any URL format
 */
export function extractS3KeyFromUrl(url: string): string | null {
  try {
    // For presigned URLs, extract the key from the path
    const match = url.match(/amazonaws\.com\/(.+?)\?/)
    if (match) return match[1]
    
    // For direct URLs
    const directMatch = url.match(/amazonaws\.com\/(.+)/)
    return directMatch ? directMatch[1] : null
  } catch (error) {
    console.error('Error extracting S3 key:', error)
    return null
  }
}