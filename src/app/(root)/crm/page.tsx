import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-start justify-center h-full w-full' >
      <div className="">
        <Image src='/images/crm.png' width={500} height={500} alt='crm' />

        <div className="text-center">
          <div className="text-xl font-semibold">
            Let's get your finance automated
          </div>
          <div className="text-sm font-thin">Click to create your client account</div>
          <Button variant="outline" className='mt-4 bg-zinc-800 border-gray-500 rounded-sm' >
            <PlusIcon className="mr-2" />
            Create Account
          </Button>
        </div>

      </div>
    </div>
  )
}

export default page