// src/components/Sidebar/menuItems.tsx
import type { ReactNode } from 'react'
import {
  HomeIcon,
  UserIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'

export interface MenuItem {
  label: string
  icon?: ReactNode
  path?: string
  onClick?: () => void
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: <HomeIcon className="h-6 w-6"/>,
    path: '/dashboard'
  },
  {
    label: 'Profil',
    icon: <UserIcon className="h-6 w-6"/>,
    path: '/dashboard/profil'
  },
  {
    label: 'Správa videí',
    icon: <VideoCameraIcon className="h-6 w-6"/>,
    path: '/dashboard/spravce_vzkazu'
  },
  {
    label: 'Nastavení',
    icon: <Cog6ToothIcon className="h-6 w-6"/>,
    path: '/dashboard/nastaveni'
  },
  {
    label: 'Rozšířit služby',
    icon: <PlusCircleIcon className="h-6 w-6"/>,
    path: '/dashboard/sluzby',
    children: [
      { label: 'QR Magnetky',       path: '/dashboard/sluzby/magnetky' },
      { label: 'Premium funkce',    path: '/dashboard/sluzby/premium'  },
      { label: 'Rodinné balíčky',   path: '/dashboard/sluzby/rodinne' }
    ]
  },
  {
    label: 'Odhlásit',
    icon: <ArrowRightOnRectangleIcon className="h-6 w-6"/>,
    onClick: () => signOut({ callbackUrl: '/' })
  }
]
