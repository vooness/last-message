'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  FiMenu,
  FiX,
  FiMessageSquare,
  FiUser,
  FiUserPlus,
  FiLogOut,
  FiHome,
  FiBriefcase,
  FiDollarSign,
  FiPhone,
  FiInfo,
  FiHelpCircle
} from "react-icons/fi"
import { useSession, signOut } from "next-auth/react"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { label: "Hlavní stránka", href: "/#home",     icon: <FiHome size={18}/> },
  { label: "Naše služby",    href: "/#features", icon: <FiBriefcase size={18}/> },
  { label: "Ceník",          href: "/#pricing",  icon: <FiDollarSign size={18}/> },
  { label: "Kontakt",        href: "/#contact",  icon: <FiPhone size={18}/> },
  { label: "O nás",          href: "/#about",    icon: <FiInfo size={18}/> },
  { label: "FAQ",            href: "/#faq",      icon: <FiHelpCircle size={18}/> },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-4 sm:px-12 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-[#ffddd8] shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/#home" className="flex items-center gap-2 text-lg font-extrabold text-gray-800">
        <FiMessageSquare size={33} />
        <span>Last Message</span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-800 hover:text-blue-500 relative group"
          >
            {item.label}
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* Desktop actions */}
      <div className="hidden md:flex items-center gap-4">
        {session ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500"
          >
            <FiLogOut size={20} />
            Odhlásit se
          </button>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-gray-800 hover:text-blue-500"
            >
              <FiUser size={20} />
              Přihlásit se
            </Link>
            <Link
              href="/auth/register"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition"
            >
              <FiUserPlus size={20} />
              Registrovat se
            </Link>
          </>
        )}
      </div>

      {/* Mobile buttons */}
      <div className="flex md:hidden items-center gap-4">
        {/* ikona uživatele */}
        <button
          onClick={() => {
            setUserOpen(o => !o)
            setMenuOpen(false)
          }}
          className="text-gray-800"
          aria-label="Uživatelské menu"
        >
          <FiUser size={24} />
        </button>
        {/* hamburger */}
        <button
          onClick={() => {
            setMenuOpen(o => !o)
            setUserOpen(false)
          }}
          className="text-gray-800"
          aria-label="Hlavní menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile: hlavní odkazy */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col py-2 gap-1 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Mobile: login/register nebo sign-out */}
      {userOpen && (
        <div className="absolute top-full right-4 w-48 bg-white shadow-md flex flex-col py-2 gap-1 md:hidden">
          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              <FiLogOut size={18} />
              Odhlásit se
            </button>
          ) : (
            <>
              <Link
                href="/auth/login"
                onClick={() => setUserOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FiUser size={18} />
                Přihlásit se
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setUserOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FiUserPlus size={18} />
                Registrovat se
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
