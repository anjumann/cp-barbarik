"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from 'next/navigation'

const FormSchema = z.object({

    companyName: z.string().min(2, {
        message: "Enter Company name",
    }),

    category: z.string().min(2, {
        message: "Enter Category",
    }),

    companySize: z.string().min(2, {
        message: "Enter Company Size",
    }),

    companyEmail: z.string().min(2, {
        message: "Enter Company Email",
    }).email("Enter a valid email"),

    description: z.string().min(2, {
        message: "Enter the description",
    }),

})


const ClientForm = () => {

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const clientReq = async (data: z.infer<typeof FormSchema>) => {
       
        let bodyContent = JSON.stringify({
            "companyName": data.companyName,
            "category": data.category,
            "companySize": data.companySize,
            "companyEmail": data.companyEmail,
            "description": data.description
        });

        await fetch("/api", {
            method: "POST",
            body: bodyContent,
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }
        });

    }   

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        setLoading(true)
        try {
            await clientReq(data)
            router.push('/dashboard')
        } catch (error) {
            console.error(error)
        }
        setLoading(false)


    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" w-2/3  space-y-6">

                    <div className=" grid grid-cols-2 gap-10 ">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Company Name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="IT services">IT services</SelectItem>
                                            <SelectItem value="Finance Services">Finance Services</SelectItem>
                                            <SelectItem value="Other Services">Other Services</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className=" grid grid-cols-2 gap-10">
                        <FormField
                            control={form.control}
                            name="companySize"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Size</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a company size" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="0-10">0-10</SelectItem>
                                            <SelectItem value="11-100">11-100</SelectItem>
                                            <SelectItem value="101-500">101-500</SelectItem>
                                            <SelectItem value="501-1000">501-1000</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="companyEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@mail.com" type="email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Your text goes here"
                                            className="resize-y  "
                                            {...field}
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-x-4">
                        <Button variant="default" type="submit" disabled={loading} > {loading ? "Submitting..." : "Submit"} </Button>
                        <Button variant='outline' >Cancel</Button>
                    </div>


                </form>
            </Form>
        </>
    )
}

export default ClientForm