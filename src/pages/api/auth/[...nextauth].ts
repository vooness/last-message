// src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'

const prisma = new PrismaClient()

export default NextAuth({
  // 1) Adapter pro Prisma
  adapter: PrismaAdapter(prisma),

  // 2) Použijeme JWT místo databázových sessions
  session: {
    strategy: 'jwt',
  },

  // 3) Tajný klíč pro podepisování tokenů
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: 'Email & Heslo',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Heslo', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Chybí e-mail nebo heslo')
        }

        // najdeme uživatele dle e-mailu
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (!user) {
          throw new Error('Uživatel nenalezen')
        }

        // ověříme heslo
        const isValid = await compare(credentials.password, user.password)
        if (!isValid) {
          throw new Error('Neplatné heslo')
        }

        // vracíme objekt, který chceme vložit do JWT
        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],

  callbacks: {
    // 4) do JWT přidáme id uživatele
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },

    // 5) do session.user přidáme id z tokenu
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string
      }
      return session
    },
  },

  pages: {
    // pokud máš vlastní React stránky pod /auth/login a /auth/register
    signIn: '/auth/login',
    error: '/auth/login?error=CredentialsSignin',
  },
})
