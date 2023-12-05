import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex  w-[100vw]">
      <div className="">
        <Sidebar/>
      </div>
      <div className="w-full">
        <Navbar/>
        {children}
      </div>
    </div>
  )
}
