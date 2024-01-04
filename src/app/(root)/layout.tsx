import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

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
