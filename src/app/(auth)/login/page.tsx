import LoginCard from '@/components/login/LoginCard'
import Image from 'next/image'
import React from 'react'
import { FiHome } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";
import { FiBox } from "react-icons/fi";
import { SiPowerautomate } from "react-icons/si";
const sample = [
    {
        id: 1,
        label: 'Extract',
        logo: <FiHome />
    },
    {
        id: 2,
        label: 'Analyze',
        logo: <SiGoogledocs />
    },
    {
        id: 3,
        label: 'Inquire',
        logo: <FiBox />
    },
    {
        id: 4,
        label: 'Automate',
        logo: <SiPowerautomate />
    },
]

const page = () => {
    return (
        <div className='h-full w-full relative overflow-hidden ' >
            <div className="gradient-03  " />
            <div className="bg-glassmorph  w-fit mx-auto flexCenter mt-10 ">
                <div className="flex gap-36 px-6 py-3 ">
                    {
                        sample.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center justify-center cursor-pointer ">
                                    {item.logo}
                                    <div className="ml-2 text-gray-400 text-lg font-semibold">
                                        {item.label}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=" grid grid-cols-5 px-12 mt-10">
                <div className="col-span-3 flex items-center justify-center ">
                    <Image src="/images/copilot-loginscreen.png" width={700} height={700} quality={100} alt="copilot logo" />
                </div>
                <div className=" col-span-2 w-5/6 flexCenter ">
                    <LoginCard />
                </div>
            </div>

        </div>
    )
}

export default page