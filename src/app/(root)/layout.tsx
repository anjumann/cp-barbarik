import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Metadata } from "next"
import { SiDebian } from "react-icons/si"

export const metadata: Metadata = {
  title: 'Barbarik AI',
  description: 'Barbarik AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex" >
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
