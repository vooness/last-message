// src/components/Sidebar/SidebarMenuItem.tsx
'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import type { MenuItem } from './menuItems'
import styles from './sidebar.module.css'

interface Props {
  item: MenuItem
}

export const SidebarMenuItem: FC<Props> = ({ item }) => {
  const [open, setOpen] = useState(false)

  // položka s podmenu
  if (item.children) {
    return (
      <div className={styles.item}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setOpen(o => !o)}
        >
          {item.icon}
          <span className="ml-3 flex-1 text-left">{item.label}</span>
          <span
            className={styles.arrow}
            style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            ▶
          </span>
        </button>

        {open && (
          <ul className={styles.submenu}>
            {item.children.map(child => (
              <li key={child.label} className={styles.submenuItem}>
                <Link href={child.path!} className={styles.submenuLink}>
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  // odkaz vs. tlačítko
  return (
    <div className={styles.item}>
      {item.onClick ? (
        <button
          type="button"
          className={styles.button}
          onClick={item.onClick}
        >
          {item.icon}
          <span className="ml-3">{item.label}</span>
        </button>
      ) : (
        <Link href={item.path!} className={styles.link}>
          {item.icon}
          <span className="ml-3">{item.label}</span>
        </Link>
      )}
    </div>
  )
}
