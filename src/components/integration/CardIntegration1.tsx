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
import { Button } from '../ui/button'

const CardIntegration1 = ({ data }: {
    data: {
        name: string;
        desc: string;
    }
}) => {
    return (
        <Card className='db-card-glassmorh' >
            <CardHeader className='flex flex-row items-center pb-2 justify-between ' >
                <div className="flex flex-row items-center">
                    <div className="pr-2 flex gap-x-2 flex-row justify-center items-center ">
                        <Image className="" src="/logo/zoho.png" alt="zoho logo" height={40} width={40} />
                        <div className="text-sm font-sans font-semibold"> {data.name} </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className='flex flex-row justify-between text-sm font-light pb-4 ' >
                {data.desc}
            </CardContent>
            <CardFooter className='flex flex-row justify-between items-center ' >
                <Button variant="outline" > Integrate </Button>
            </CardFooter>

        </Card>
    )
}

export default CardIntegration1