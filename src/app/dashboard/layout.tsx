import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-3 w-[100vw]">
      <div className="w-96">
        <Sidebar/>
      </div>
      <div className="w-full">
        <Navbar/>
        {children}
      </div>
    </div>
  )
}
