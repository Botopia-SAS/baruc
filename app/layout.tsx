import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Baruc ",
  description: "Olvida las implementaciones lentas BARUC pone tu voz de marca en WhatsApp al instante",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen relative overflow-x-hidden">
        <div className="halo-effect" />
        {children}
      </body>
    </html>
  )
}
