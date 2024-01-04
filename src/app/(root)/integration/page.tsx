import CardIntegration1 from '@/components/integration/CardIntegration1'
import React from 'react'
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <div className="w-11/12 mt-3 mx-auto " >
      <div className="flex justify-between items-center my-3">
        <span className='font-bold text-lg' >
          Your organization
        </span>
        <Button variant='outline' className='bg-zinc-800' >Go to your Organization</Button>
      </div>
      <div className="grid grid-cols-3 gap-7 ">
        <CardIntegration1 />
        <CardIntegration1 />
        <CardIntegration1 />
      </div>

    </div>
  )
}

export default page