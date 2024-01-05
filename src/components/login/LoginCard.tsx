"use client"

import { Separator } from "@/components/ui/separator"
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";

export default function LoginCard() {
    return (
        <Card className="bg-glassmorph  " >
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-2xl flex flex-row justify-center items-center "> <Image src="/logo/barbarik-logo.png" alt="barbarik logo" width={35} height={35} /> Barbarik AI
                </CardTitle>
                {/* <Separator /> */}
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        <FiGithub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button variant="outline">
                        <FaGoogle className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white -z-10 " />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className=" px-2 text-[10px] font-semibold bg-gray-100 text-gray-950 p-1 rounded-xl ">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-gradient-purple-to-pink  ">Create account</Button>
            </CardFooter>
            <CardFooter>
                Don't you have an account yet? {"  "} <a href="#" className="text-pink-600 hover:underline font-bold ml-1">Sign up</a>
            </CardFooter>
            

        </Card>
    )
}