// src/app/dashboard/layout.tsx  (Server Component)
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Sidebar } from "../../components/Sidebar/Sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 1) Zjistíme session na serveru
  const session = await getServerSession(authOptions)

  // 2) Pokud žádná, přesměrujeme na login
  if (!session) {
    redirect("/auth/login")
  }

  // 3) Pokud je session ok, vykreslíme Dashboard
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
