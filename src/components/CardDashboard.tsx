import { Company } from '@/types';
import React from 'react'
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdOutlineModeEditOutline } from "react-icons/md";
const CardDashboard = ({ data }: { data: Company }) => {
  return (
    <>
      <div className=" grid grid-cols-4 h-30 w-96 border-2 border-gray-600 bg-zinc-800  rounded-lg ">
        <div className="col-span-1 flexCenter text-6xl text-yellow-600">
          <HiDocumentDuplicate />
        </div>
        <div className="col-span-2 grid grid-rows-3">
          <div className="rounded-full bg-blue-50 text-blue-600 py-1 border-2 border-blue-700 text-center text-sm mt-1 w-fit px-3">{data.category}</div>
          <div className="text-start flex items-center text-lg font-semibold">{data.companyName}</div>
          <div className="text-start flex items-center text-sm text-gray-300/90 "> {data.companySize} </div>

        </div>
        <div className="col-span-1 flexCenter text-xl text-gray-200 -mt-9 -mr-3 ">
          <MdOutlineModeEditOutline />
        </div>

      </div>
    </>
  )
}

export default CardDashboard