import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { BsShopWindow } from "react-icons/bs";


const CardDb1 = () => {
    return (
        <>
            <Card className=' bg-glassmorph' >
                <CardHeader className='flex flex-row items-center  justify-between ' >
                    <div className="flex flex-row items-center gap-2 ">
                        <div className="p-2 bg-orange-400 rounded-sm">
                            <BsShopWindow className=" text-white font-extrabold text-xl" />
                        </div>
                        <CardTitle>Card Title</CardTitle>
                    </div>
                    <CardDescription className='text-accent-foreground' >Card Description</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-row justify-between font-semibold ' >
                    <div className="flex flex-col">
                        <div className="">
                            Current
                        </div>
                        <div className="">
                            ₹ 4000 /-
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="">
                            Overdue
                        </div>
                        <div className="">
                            0
                        </div>
                    </div>
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
        </>
    )
}

export default CardDb1