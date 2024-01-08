import { CardDb } from '@/components/dashboard/CardDb'
import React from 'react'

const page = () => {
  return (
    <div className="w-11/12 mt-3 mx-auto relative " >
      <div className="gradient-03" />
      <div className="grid grid-cols-3 gap-6 mt-10 ">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => {
          return (
            <CardDb key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default page