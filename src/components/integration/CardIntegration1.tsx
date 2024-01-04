import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BsShopWindow } from 'react-icons/bs'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"

const CardIntegration1 = () => {
    return (
        <Card className='bg-zinc-800 border-2 border-zinc-600' >
            <CardHeader className='flex flex-row items-center  justify-between ' >
                <div className="flex flex-row items-center gap-2 ">
                    <div className="p-2 ">
                        <Image className="" src="/logo/zoho.png" alt="zoho logo" height={50} width={50} />
                    </div>
                    {/* <CardTitle>Card Title</CardTitle> */}
                </div>
                <CardDescription className='text-accent-foreground' ><Badge variant="outline">New</Badge>
                </CardDescription>
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
    )
}

export default CardIntegration1