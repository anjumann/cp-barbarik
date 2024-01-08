
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { DataTable } from './DataTable';
const CardDb = () => {
    let selectedWeek = [
        {
            id: 1,
            name: "This Week",
        },
        {
            id: 2,
            name: "Last Week",
        },
        {
            id: 3,
            name: "This Month",
        },
        {
            id: 4,
            name: "Last Month",
        },
    ]
    return (
        <>
            <Card className="db-card-glassmorh" >
                <CardHeader className='flex flex-row items-center  justify-between ' >
                    <div className="flex flex-row items-center gap-2 ">

                        <CardTitle className='text-lg' >Expense-to-Revenue Ratio</CardTitle>
                    </div>
                    <CardDescription className='text-muted-foreground  ' >
                        <Select>
                            <SelectTrigger className="w-fit">
                                <SelectValue placeholder="This week" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Interval</SelectLabel>

                                    {
                                        selectedWeek.map((item) => (
                                            <SelectItem key={item.id} value={item.name}>
                                                {item.name}
                                            </SelectItem>
                                        ))
                                    }

                                  
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </CardDescription>
                </CardHeader>
                <CardContent className=' flexCenter  font-semibold ' >
                <DataTable/>
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
        </>
    )
}

export { CardDb }