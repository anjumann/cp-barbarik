import CardDashboard from '@/components/CardDashboard'
import Link from 'next/link';
import React from 'react'
import { FaPlus } from "react-icons/fa6";

{/* <CardDashboard/> */ }
const page = () => {
  return (
    <div className='w-full py-6 px-10' >
      <div className="w-full  ">
        <div className="flex items-center justify-between  w-full text-lg font-semibold">
          Client Account
          <Link href="/dashboard/form" className='flex items-center gap-2 text-gray-50 bg-blue-700 px-2 py-1 rounded-md '  >
            <FaPlus />
            Client account
          </Link>
        </div>
        <div className="mt-10 mb-5  grid grid-cols-3 gap-6 ">
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
        </div>

      </div>
      <div className="">
        <div className="flex items-center justify-between  w-full text-lg font-semibold">
          Recently Created Account
         
        </div>
        <div className="mt-10 mb-5  grid grid-cols-3 gap-6 ">
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
        </div>
      </div>

    </div>
  )
}

export default page