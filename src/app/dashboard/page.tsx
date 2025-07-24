'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import {
  FiVideo,
  FiCode,
  FiBell,
  FiEye,
  FiTrendingUp,
  FiPlusCircle,
  FiCode as FiQr,
  FiUser,
  FiClock,
  FiCheckCircle,
  FiMail,
  FiAlertCircle,
  FiMessageSquare
} from 'react-icons/fi'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function DashboardHome() {
  const { data: session } = useSession()

  // Pokud přejeme lokalní část emailu jako jméno
  const username = session?.user?.email?.split('@')[0] ?? 'Uživatel'

  return (
    <div className="flex min-h-screen bg-[#ffddd8]">
      {/* Hlavní obsah */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        {/* Dashboard obsah */}
        <div className="flex-1 flex flex-col pt-20 pb-8 mt-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Úvodní sekce */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Vítej, {username}!
              </h1>
              <p className="text-gray-600 text-lg">
                Zde je stručný přehled tvých posledních aktivit a vzkazů.
              </p>
            </header>

            {/* Přehledové karty */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Celkem vzkazů */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-[#FF6F6D]/10 p-3 rounded-lg">
                    <FiVideo className="h-8 w-8 text-[#FF6F6D]" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-800">3</p>
                    <p className="text-gray-600 text-sm">Celkem vzkazů</p>
                  </div>
                </div>
              </div>

              {/* Aktivní magnetky */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FiCode className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-800">2</p>
                    <p className="text-gray-600 text-sm">Aktivní magnetky</p>
                  </div>
                </div>
              </div>

              {/* Nepřečtené notifikace */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <FiBell className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-800">1</p>
                    <p className="text-gray-600 text-sm">Nové notifikace</p>
                  </div>
                </div>
              </div>

              {/* Celkem přehrání */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FiEye className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-800">0</p>
                    <p className="text-gray-600 text-sm">Celkem přehrání</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Rychlé akce a nedávná aktivita */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

              {/* Rychlé akce */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FiTrendingUp className="mr-2 text-[#FF6F6D]" />
                  Rychlé akce
                </h3>
                <div className="space-y-4">
                  <Link href="/dashboard/upload" className="flex items-center p-4 bg-gradient-to-r from-[#FF6F6D] to-[#ff8f8d] text-white rounded-lg hover:shadow-lg transition-all group">
                    <FiPlusCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold">Nahrát nový vzkaz</p>
                      <p className="text-sm opacity-90">Vytvoř video zprávu pro své blízké</p>
                    </div>
                  </Link>

                  <Link href="/dashboard/qr-codes" className="flex items-center p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors group">
                    <FiQr className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold">Objednat magnetku</p>
                      <p className="text-sm opacity-75">Získej QR kód pro svůj vzkaz</p>
                    </div>
                  </Link>

                  <Link href="/dashboard/profile" className="flex items-center p-4 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors group">
                    <FiUser className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-semibold">Upravit profil</p>
                      <p className="text-sm opacity-75">Aktualizuj své kontaktní údaje</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Nedávná aktivita */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <FiClock className="mr-2 text-[#FF6F6D]" />
                  Nedávná aktivita
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <FiCheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Vzkaz úspěšně nahrán</p>
                      <p className="text-sm text-gray-600">Video „Pro mou rodinu“ bylo uloženo</p>
                      <p className="text-xs text-gray-500 mt-1">Před 2 dny</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <FiMail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Magnetka odeslána</p>
                      <p className="text-sm text-gray-600">QR magnetka byla odeslána na tvou adresu</p>
                      <p className="text-xs text-gray-500 mt-1">Před 5 dny</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <FiAlertCircle className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Profil vytvořen</p>
                      <p className="text-sm text-gray-600">Tvůj účet byl úspěšně založen</p>
                      <p className="text-xs text-gray-500 mt-1">Před týdnem</p>
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* Moje vzkazy */}
            <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  <FiMessageSquare className="mr-2 text-[#FF6F6D]" />
                  Moje vzkazy
                </h3>
                <Link href="/dashboard/messages" className="text-[#FF6F6D] hover:text-[#ff8f8d] font-medium text-sm flex items-center">
                  Zobrazit všechny
                  <FiEye className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* ... */}
              </div>
            </section>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
