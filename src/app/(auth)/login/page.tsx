import LoginCard from '@/components/login/LoginCard'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='h-full w-full relative  ' >
            <div className="gradient-03 " />
            <div className=" grid grid-cols-5 px-12 mt-10">
                <div className="col-span-3 flex items-center justify-center ">
                    <Image src="/images/copilot-loginscreen.png" width={700} height={700} quality={100} alt="login screen" />
                </div>
                <div className=" col-span-2 w-2/3 flexCenter ">
                    <LoginCard />
                </div>
            </div>

        </div>
    )
}

export default page