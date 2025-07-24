// src/types/next-auth.d.ts
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      firstName?: string
      lastName?: string
      birthDate?: string
      phone?: string
      street?: string
      houseNumber?: string
      orientationNumber?: string
      city?: string
      postalCode?: string
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    id: string
    firstName?: string
    lastName?: string
    birthDate?: string
    phone?: string
    street?: string
    houseNumber?: string
    orientationNumber?: string
    city?: string
    postalCode?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    firstName?: string
    lastName?: string
    birthDate?: string
    phone?: string
    street?: string
    houseNumber?: string
    orientationNumber?: string
    city?: string
    postalCode?: string
  }
}
