'use client'
import { usePathname } from 'next/navigation'
import { IoPerson } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
const Navbar = () => {

  const pathname = usePathname()

  return (
    <div className=' py-2 px-10 text-lg font-bold flex items-center justify-between bg-zinc-800 ' >
      {
        pathname==="/dashboard" ? (<div className="">Co-Pilot <span className='px-2 py-1 bg-zinc-950 rounded-md ml-3' > Data Extraction </span></div>): (
          pathname==="/dashboard/form" ? (<div className="">Accounts </div>) :""
        )


      }
      
      <div className="flex items-center gap-4 text-2xl font-bold">
        <div className=" "><MdNotificationsNone /></div>
        <div className="rounded-full h-12 w-12 bg-gray-700 flexCenter text-3xl "> <IoPerson /> </div>
      </div>
    </div>
  )
}

export default Navbar