// src/app/layout.tsx  (Server Component)
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// wrapujeme do Providers (klientský komponent)
import { Providers } from './providers'


import { Sidebar } from '../components/Sidebar/Sidebar'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Last Message',
  description: 'Generování posledních zpráv…',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} antialiased flex min-h-screen`}>
        <Providers>
          
          <div className="flex flex-1">
            {/* Sidebar se bude samo schovávat přes CSS, ale je tu vždy */}
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
          </div>
          
        </Providers>
      </body>
    </html>
  )
}
