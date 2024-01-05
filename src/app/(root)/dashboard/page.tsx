import CardDb1 from '@/components/dashboard/CardDb1'
import { DonutChartUsage } from '@/components/dashboard/DonutChartUsage'
import React from 'react'
// import Chart1 from '@/components/dashboard/Chart1'
const page = () => {
  return (
    <div className="w-11/12 mt-3 mx-auto relative " >
      <div className="gradient-03"/>
      <div className="grid grid-cols-3 gap-7 ">
        <CardDb1 />
        <CardDb1 />
        <CardDb1 />
      </div>
      <div className="grid grid-cols-3">
        <div className="grid grid-cols-3 col-span-2 gap-7 mt-12">
          {/* <DonutChartUsage /> */}
          <div className="col-span-2 flex flex-col gap-3">
            <CardDb1 />
            <CardDb1 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page