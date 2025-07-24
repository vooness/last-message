'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName:         '',
    lastName:          '',
    email:             '',
    password:          '',
    birthDate:         '',
    phone:             '',
    street:            '',
    houseNumber:       '',
    orientationNumber: '',
    city:              '',
    postalCode:        ''
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })

    if (res.ok) {
      // automatické přihlášení
      await signIn('credentials', {
        redirect: false,
        email:    form.email,
        password: form.password
      })
      router.push('/dashboard')
    } else {
      const { error } = await res.json().catch(() => ({ error: 'Chybná odpověď z API' }))
      alert(error || 'Registrace selhala.')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-[#ffddd8] pt-24 pb-12 px-4">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl bg-white rounded-lg shadow-md p-8 space-y-6"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Registrace
          </h1>

          {/* Jméno a příjmení */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Jméno
              </label>
              <input
                id="firstName" name="firstName"
                type="text" autoComplete="given-name"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Např. Jan"
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Příjmení
              </label>
              <input
                id="lastName" name="lastName"
                type="text" autoComplete="family-name"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Např. Novák"
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
          </div>

          {/* Email a heslo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email" name="email" type="email" required
                value={form.email}
                onChange={handleChange}
                placeholder="tvuj@email.cz"
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Heslo <span className="text-red-500">*</span>
              </label>
              <input
                id="password" name="password" type="password" required
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
          </div>

          {/* Datum narození a telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                Datum narození
              </label>
              <input
                id="birthDate" name="birthDate" type="date"
                value={form.birthDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                id="phone" name="phone" type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+420 123 456 789"
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
          </div>

          {/* Adresa */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresa
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                name="street" type="text" placeholder="Ulice"
                value={form.street} onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
              <input
                name="houseNumber" type="text" placeholder="Č.p."
                value={form.houseNumber} onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
              <input
                name="orientationNumber" type="text" placeholder="Č.o."
                value={form.orientationNumber} onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <input
                name="city" type="text" placeholder="Město"
                value={form.city} onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
              <input
                name="postalCode" type="text" placeholder="PSČ"
                value={form.postalCode} onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6F6D]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
          >
            Registrovat se
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
