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
    <Sidebar/>
    {children}
   </div>
  )
}
