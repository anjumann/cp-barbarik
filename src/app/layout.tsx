import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Control panel',
  description: 'control panel of barbarik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} basic `}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
