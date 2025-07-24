// src/components/Sidebar/Sidebar.tsx
'use client'

import { FC, useState } from 'react'
import { useSession } from 'next-auth/react'
import styles from './sidebar.module.css'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import { menuItems } from './menuItems'
import { SidebarMenuItem } from './SidebarMenuItem'

export const Sidebar: FC = () => {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)

  // 1) Dokud session načítá, nic nerenderuj
  if (status === 'loading') return null

  // 2) Pokud není přihlášený, sidebar vůbec neukazuj
  if (!session) return null

  // 3) Jinak vykresli sidebar jako doposud
  return (
    <>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
      >
        {open
          ? <ChevronLeftIcon className="h-5 w-5" />
          : <ChevronRightIcon className="h-5 w-5" />
        }
        <span className="ml-2">{open ? '' : ''}</span>
      </button>

      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2>Dashboard</h2>
        </div>
        <nav className={styles.menu}>
          {menuItems.map(item => (
            <SidebarMenuItem key={item.label} item={item} />
          ))}
        </nav>
      </aside>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
