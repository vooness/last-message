import { NextAuthOptions, Session } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { compare } from "bcrypt"
import { prisma } from "@/lib/prisma"
import type { JWT } from "next-auth/jwt"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "E-mail / Heslo",
      credentials: {
        email:    { label: "E-mail",  type: "email" },
        password: { label: "Heslo",    type: "password" }
      },
      async authorize(creds) {
        if (!creds?.email || !creds.password)
          throw new Error("Email a heslo jsou povinné.")

        const user = await prisma.user.findUnique({
          where: { email: creds.email }
        })
        if (!user) throw new Error("Uživatel nenalezen.")

        const ok = await compare(creds.password, user.password)
        if (!ok) throw new Error("Nesprávné heslo.")

        // Vracíme DefaultUser + naše přidaná pole
        return {
          id:                 user.id.toString(),
          email:              user.email,
          firstName:          user.firstName  || undefined,
          lastName:           user.lastName   || undefined,
          birthDate:          user.birthDate?.toISOString(),
          phone:              user.phone      || undefined,
          street:             user.street     || undefined,
          houseNumber:        user.houseNumber|| undefined,
          orientationNumber:  user.orientationNumber || undefined,
          city:               user.city       || undefined,
          postalCode:         user.postalCode || undefined
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/login",
    error:  "/auth/login?error"
  },
  callbacks: {
    async jwt({ token, user }): Promise<JWT> {
      if (user) {
        token.id                 = user.id
        token.email              = user.email!
        token.firstName          = user.firstName
        token.lastName           = user.lastName
        token.birthDate          = user.birthDate
        token.phone              = user.phone
        token.street             = user.street
        token.houseNumber        = user.houseNumber
        token.orientationNumber  = user.orientationNumber
        token.city               = user.city
        token.postalCode         = user.postalCode
      }
      return token
    },
    async session({ session, token }): Promise<Session> {
      if (session.user) {
        session.user.id                 = token.id
        session.user.email              = token.email!
        session.user.firstName          = token.firstName
        session.user.lastName           = token.lastName
        session.user.birthDate          = token.birthDate
        session.user.phone              = token.phone
        session.user.street             = token.street
        session.user.houseNumber        = token.houseNumber
        session.user.orientationNumber  = token.orientationNumber
        session.user.city               = token.city
        session.user.postalCode         = token.postalCode
      }
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}
