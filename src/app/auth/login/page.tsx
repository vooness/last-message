'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password
    })

    if (res?.ok) {
      router.push('/dashboard')
    } else {
      alert('Přihlášení selhalo. Zkontroluj email a heslo.')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#ffddd8] text-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6 mt-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
        >
          <h1 className="text-2xl font-bold text-center text-gray-900">Přihlášení</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
          >
            Přihlásit se
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}
