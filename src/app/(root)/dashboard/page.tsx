import CardDb1 from '@/components/dashboard/CardDb1'
import React from 'react'

const page = () => {
  return (
    <div className="w-11/12 mt-3 mx-auto " >
      <div className="grid grid-cols-3 gap-7 ">
        <CardDb1 />
        <CardDb1 />
        <CardDb1 />
      </div>

    </div>
  )
}

export default page