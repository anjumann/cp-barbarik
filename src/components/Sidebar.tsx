"use client"
import logo from '@/assests/logo.png'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { LuHome } from "react-icons/lu";
import { FiBox } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";
import { ImStack } from "react-icons/im";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {

  const [navbar, setNavbar] = useState(false)

  const NavList = [
    {
      name: "Dashboard",
      logo: <LuHome />,
      link: ""
    },
    {
      name: "CRM",
      logo: <FiBox />,
      link: ""
    },
    {
      name: "Integration",
      logo: <SiGoogledocs />,
      link: ""
    },
    {
      name: "Copilot",
      logo: <ImStack />,
      link: ""
    },

  ]

  const BottomNavList = [
    {
      name: "Support",
      logo: <MdOutlineContactSupport />,
      link: ""
    },
    {
      name: "Settings",
      logo: <BsGear />,
      link: ""
    },
  ]

  return (
    <>

      <div className=" h-screen border-r-2 border-gray-600 px-4 py-2 flex flex-col justify-between ">
        <div className="">
          <div className="flex items-center justify-between ">
            <div className={`flex justify-center items-center py-1 ${!navbar ? "hidden" : ""} `} >
              <Image src={logo} height={40} width={40} alt='' />
              <span className='text-2xl font-bold' >
                Barbarik
              </span>
            </div>
            <div className= {` ${navbar?'':'w-fit mx-auto mt-2'}  text-2xl cursor-pointer`} onClick={() => { setNavbar(!navbar) }} >
              <GiHamburgerMenu />
            </div>
          </div>
          <div className="mt-3">
            {
              !navbar ?
                <span  className='text-xl  ' >
                </span> : (
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" className="block w-full p-2 ps-10 text-sm  border border-zinc-300 rounded-lg   bg-zinc-700 dark:border-gray-600 placeholder-gray-400 text-white  " placeholder="Search" />
                  </div>
                )
            }

          </div>
          <div className="flex flex-col  mt-1">
            {
              NavList.map((val, index) => {
                return (
                  <div className="flex justify-start items-center gap-3 px-1.5 py-2 text-lg cursor-pointer hover:bg-zinc-800 rounded-md" key={index} > <span className='text-2xl' > {val.logo} </span> <span className={`${navbar ? '':'hidden' }`} >  {val.name} </span> </div>
                )
              })
            }
          </div>
        </div>
        <div className="">
          <div className="Footer">
            {
              BottomNavList.map((val, index) => {
                return (
                  <div className="flex justify-start items-center gap-3 px-1.5 py-2 text-lg cursor-pointer hover:bg-zinc-800 rounded-md" key={index} > <span className='text-2xl' > {val.logo} </span>  <span className={`${navbar ? '':'hidden' }`} > {val.name} </span> </div>
                )
              })
            }
          </div>
        </div>
      </div>



    </>
  )
}

export default Sidebar