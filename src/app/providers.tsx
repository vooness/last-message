// src/app/providers.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>
}
