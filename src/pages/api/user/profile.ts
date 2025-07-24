// src/pages/api/user/profile.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

/** Tvar objektu, který vrátíme v GET */
interface ProfileData {
  firstName:          string | null
  lastName:           string | null
  email:              string
  birthDate:          string | null
  phone:              string | null
  street:             string | null
  houseNumber:        string | null
  orientationNumber:  string | null
  city:               string | null
  postalCode:         string | null
}

/** Unii možných návratových typů */
type Data =
  | ProfileData
  | { success: true }
  | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Ověříme session (přihlášení)
  const session = await getServerSession(req, res, authOptions)
  if (!session?.user?.email) {
    return res.status(401).json({ error: 'Nejste přihlášen.' })
  }
  const userId = Number(session.user.id)

  if (req.method === 'GET') {
    // Vrátíme data profilu
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        birthDate: true,
        phone: true,
        street: true,
        houseNumber: true,
        orientationNumber: true,
        city: true,
        postalCode: true
      }
    })
    if (!user) {
      return res.status(404).json({ error: 'Uživatel nenalezen.' })
    }
    // převedeme Date na ISO string
    return res.status(200).json({
      ...user,
      birthDate: user.birthDate?.toISOString() ?? null
    })
  }

  if (req.method === 'PATCH') {
    const {
      firstName,
      lastName,
      birthDate,
      phone,
      street,
      houseNumber,
      orientationNumber,
      city,
      postalCode
    } = req.body as Partial<ProfileData>

    try {
      await prisma.user.update({
        where: { id: userId },
        data: {
          firstName,
          lastName,
          birthDate: birthDate ? new Date(birthDate) : undefined,
          phone,
          street,
          houseNumber,
          orientationNumber,
          city,
          postalCode
        }
      })
      return res.status(200).json({ success: true })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: 'Chyba při ukládání.' })
    }
  }

  res.setHeader('Allow', ['GET', 'PATCH'])
  return res.status(405).json({ error: 'Method Not Allowed' })
}
