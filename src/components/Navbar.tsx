'use client'
import { usePathname } from 'next/navigation'
import { IoPerson } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { NavList } from '@/constant';
import { useActiveTab } from '@/lib/hooks';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BsGear } from 'react-icons/bs';
import { TfiHelpAlt } from "react-icons/tfi";
import Link from 'next/link';
import { IoMdLogOut } from "react-icons/io";

const ProfileOption = [
  {
    name: "Profile",
    link: "/profile",
    logo: <IoPerson />
  },
  {
    name: "Setting",
    link: "/setting",
    logo: <BsGear />
  },
  {
    name: "Help",
    link: "/help-center",
    logo: <TfiHelpAlt />
  },


]


const Navbar = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className=' py-2 pl-6 pr-10 text-lg  flex items-center justify-between bg-zinc-800 ' >
      <div>
        {
          NavList.map((item, index) => (
            <span key={index} className={`${useActiveTab(item.link) ? "" : "hidden"} text-lg font-semibold text-muted-foreground`}>{item.name}</span>
          ))
        }

      </div>

      <div className="flex items-center gap-4 text-2xl font-bold">
        <div className=" "><MdNotificationsNone /></div>
        <Popover>
          <PopoverTrigger><div className="rounded-full h-12 w-12 bg-gray-700 flexCenter text-3xl "> <IoPerson /> </div></PopoverTrigger>
          <PopoverContent>
            {ProfileOption.map((item, index) => {
              return (
                <Link href={item.link} key={index} >
                  <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md" >
                    {item.logo}
                    {item.name}
                  </div>
                </Link>
              )
            })}

            <div className="flex items-center gap-2 text-lg font-semibold text-muted-foreground px-4 py-2 hover:bg-gray-700 hover:text-white rounded-md" >
              <IoMdLogOut />
              Logout
            </div>
          </PopoverContent>
        </Popover>

      </div>
    </div>
  )
}

export default Navbar