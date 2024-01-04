import React from 'react'
import { LuLoader } from "react-icons/lu";
const loading = () => {
  return (
    <div aria-label="Loading..." role="status" className="flexCenter h-full w-full space-x-2 ">
     <LuLoader className="animate-spin text-5xl text-gray-500 " />
      <span className="text-6xl font-medium text-gray-500 animate-pulse ">Loading...</span>
    </div>
  )
}

export default loading