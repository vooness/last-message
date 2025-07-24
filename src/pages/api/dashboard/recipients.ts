// pages/api/dashboard/recipients.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import type { Recipient } from '@prisma/client'

type Data = Recipient[] | Recipient | { error: string } | { success: boolean }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const userId = Number(req.query.userId)
    
    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ error: 'Chybné userId' })
    }

    if (req.method === 'GET') {
      const recipients = await prisma.recipient.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      })
      return res.status(200).json(recipients)
    }

    if (req.method === 'POST') {
      const { name } = req.body as { name?: string }
      
      if (!name || typeof name !== 'string' || !name.trim()) {
        return res.status(400).json({ error: 'Jméno příjemce je povinné' })
      }

      const trimmedName = name.trim()

      // Check if recipient already exists for this user
      const existingRecipient = await prisma.recipient.findFirst({
        where: { 
          userId,
          name: trimmedName
        }
      })

      if (existingRecipient) {
        return res.status(400).json({ error: 'Příjemce s tímto jménem již existuje' })
      }

      const created = await prisma.recipient.create({
        data: { 
          name: trimmedName, 
          userId 
        }
      })
      
      return res.status(201).json(created)
    }

    if (req.method === 'DELETE') {
      const { id } = req.body as { id?: number }
      
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'ID je povinné' })
      }

      // Check if recipient exists and belongs to user
      const existingRecipient = await prisma.recipient.findFirst({
        where: { 
          id,
          userId 
        }
      })

      if (!existingRecipient) {
        return res.status(404).json({ error: 'Příjemce nebyl nalezen' })
      }

      // Check if recipient has any messages
      const messagesCount = await prisma.message.count({
        where: { recipientId: id }
      })

      if (messagesCount > 0) {
        return res.status(400).json({ 
          error: 'Nelze smazat příjemce, který má přiřazené zprávy' 
        })
      }

      await prisma.recipient.delete({ 
        where: { id } 
      })
      
      return res.status(200).json({ success: true })
    }

    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    return res.status(405).json({ error: 'Method Not Allowed' })
    
  } catch (error) {
    console.error('[recipients] API error:', error)
    return res.status(500).json({ 
      error: 'Serverová chyba. Zkuste to prosím znovu.' 
    })
  }
}