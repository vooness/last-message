// src/pages/api/auth/register.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

type Data =
  | { id: number; email: string }
  | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  interface RegisterBody {
    firstName?:      string
    lastName?:       string
    email:           string
    password:        string
    birthDate?:      string
    phone?:          string
    street?:         string
    houseNumber?:    string
    orientationNumber?: string
    city?:           string
    postalCode?:     string
  }
  const body = req.body as RegisterBody

  const {
    firstName,
    lastName,
    email,
    password,
    birthDate,
    phone,
    street,
    houseNumber,
    orientationNumber,
    city,
    postalCode
  } = body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email a heslo jsou povinné.' })
  }

  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) {
    return res.status(409).json({ error: 'Uživatel s tímto e-mailem již existuje.' })
  }

  const hashed = await hash(password, 10)

  const user = await prisma.user.create({
    data: {
      firstName:        firstName        || null,
      lastName:         lastName         || null,
      email,
      password:         hashed,
      birthDate:        birthDate       ? new Date(birthDate) : null,
      phone:            phone            || null,
      street:           street           || null,
      houseNumber:      houseNumber      || null,
      orientationNumber: orientationNumber|| null,
      city:             city             || null,
      postalCode:       postalCode       || null
    }
  })

  return res.status(201).json({ id: user.id, email: user.email })
}
