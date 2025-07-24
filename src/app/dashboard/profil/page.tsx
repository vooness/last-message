// src/app/dashboard/profil/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  PencilIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

interface ProfileData {
  firstName?:         string | null
  lastName?:          string | null
  email:              string
  birthDate?:         string | null
  phone?:             string | null
  street?:            string | null
  houseNumber?:       string | null
  orientationNumber?: string | null
  city?:              string | null
  postalCode?:        string | null
}

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [saving, setSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/profile')
        .then(r => r.json())
        .then((data: ProfileData) => setProfile(data))
    }
  }, [status])

  if (status === 'loading' || !profile) {
    return (
      <div className="flex min-h-screen ">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex-1 flex items-center justify-center pt-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6F6D] mx-auto mb-4"></div>
              <p className="text-gray-600">Načítám váš profil...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(p => p && ({ ...p, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!profile) return
    setSaving(true)
    
    try {
      const res = await fetch('/api/user/profile', {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(profile)
      })
      
      if (res.ok) {
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      } else {
        throw new Error('Chyba při ukládání')
      }
    } catch (error) {
      console.error('Chyba při ukládání profilu:', error)
      alert('Chyba při ukládání, zkus to prosím znovu.')
    } finally {
      setSaving(false)
    }
  }

  const completionPercentage = () => {
    const fields = [profile.firstName, profile.lastName, profile.phone, profile.birthDate, profile.street, profile.city]
    const filledFields = fields.filter(field => field && field.trim() !== '').length
    return Math.round((filledFields / fields.length) * 100)
  }

  return (
    <div className="flex min-h-screen bg-[#ffddd8]">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 pt-20 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            
            {/* Header sekce */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Můj profil</h1>
              <p className="text-gray-600">Spravuj své osobní údaje a kontaktní informace</p>
            </div>

            {/* Success message */}
            {showSuccess && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800">Profil byl úspěšně aktualizován!</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Levá strana - Profil overview */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Profilová karta */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#FF6F6D] to-[#ff8f8d] rounded-full flex items-center justify-center mx-auto mb-4">
                      <UserIcon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {profile.firstName && profile.lastName 
                        ? `${profile.firstName} ${profile.lastName}`
                        : session?.user?.name || 'Uživatel'
                      }
                    </h3>
                    <p className="text-gray-600 flex items-center justify-center">
                      <EnvelopeIcon className="h-4 w-4 mr-1" />
                      {profile.email}
                    </p>
                  </div>
                </div>

                {/* Kompletnost profilu */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Kompletnost profilu</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Dokončeno</span>
                      <span className="text-sm font-semibold text-[#FF6F6D]">{completionPercentage()}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#FF6F6D] to-[#ff8f8d] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${completionPercentage()}%` }}
                      ></div>
                    </div>
                    {completionPercentage() < 100 && (
                      <p className="text-xs text-gray-500 flex items-center">
                        <ExclamationTriangleIcon className="h-4 w-4 mr-1" />
                        Vyplň všechny údaje pro kompletní profil
                      </p>
                    )}
                  </div>
                </div>

                {/* Rychlé statistiky */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Přehled účtu</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Celkem vzkazů</span>
                      <span className="text-sm font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Aktivní magnetky</span>
                      <span className="text-sm font-semibold">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Člen od</span>
                      <span className="text-sm font-semibold">Prosinec 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pravá strana - Formulář */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Osobní údaje */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#FF6F6D] to-[#ff8f8d] px-6 py-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <UserIcon className="h-5 w-5 mr-2" />
                        Osobní údaje
                      </h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            Jméno
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={profile.firstName ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="Zadej své jméno"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Příjmení
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={profile.lastName ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="Zadej své příjmení"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-2">
                          <CalendarIcon className="h-4 w-4 inline mr-1" />
                          Datum narození
                        </label>
                        <input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          value={profile.birthDate?.slice(0,10) ?? ''}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Kontaktní údaje */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <PhoneIcon className="h-5 w-5 mr-2" />
                        Kontaktní údaje
                      </h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          <EnvelopeIcon className="h-4 w-4 inline mr-1" />
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={profile.email}
                          readOnly
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-500 cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-500 mt-1">Email nelze změnit</p>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          <PhoneIcon className="h-4 w-4 inline mr-1" />
                          Telefon
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={profile.phone ?? ''}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Adresa */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                      <h3 className="text-lg font-semibold text-white flex items-center">
                        <MapPinIcon className="h-5 w-5 mr-2" />
                        Adresa
                      </h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ulice
                          </label>
                          <input
                            name="street"
                            type="text"
                            value={profile.street ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="Název ulice"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Číslo popisné
                          </label>
                          <input
                            name="houseNumber"
                            type="text"
                            value={profile.houseNumber ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="123"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Číslo orientační
                          </label>
                          <input
                            name="orientationNumber"
                            type="text"
                            value={profile.orientationNumber ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="12a"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Město
                          </label>
                          <input
                            name="city"
                            type="text"
                            value={profile.city ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="Praha"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            PSČ
                          </label>
                          <input
                            name="postalCode"
                            type="text"
                            value={profile.postalCode ?? ''}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:ring-2 focus:ring-[#FF6F6D] focus:border-transparent transition-colors"
                            placeholder="12000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit tlačítko */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={saving}
                      className="bg-gradient-to-r from-[#FF6F6D] to-[#ff8f8d] hover:from-[#e65f5d] hover:to-[#e67f7d] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {saving ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Ukládám...
                        </>
                      ) : (
                        <>
                          <PencilIcon className="h-4 w-4 mr-2" />
                          Uložit změny
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  )
}