"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useActiveTab } from "@/lib/hooks"
import { useRouter } from "next/navigation"


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const activeTab1 = useActiveTab("/profile/personal-details")
    const activeTab2 = useActiveTab("/profile/organsation-details")
    const router = useRouter()
    const handleClick = (path: string) => {
        router.push(path)
    };

    return (
        <div className='px-4  w-full mx-auto mt-10' >
            <Tabs defaultValue="account" className="w-full mx-auto">
                <div className="flexCenter">
                    <TabsList className='text-xl' >
                        <TabsTrigger value="personal" onClick={() => { handleClick("/profile/personal-details") }} className={` ${activeTab1 ? "text-foreground bg-background shadow-sm" : ""} `} >Personal Form</TabsTrigger>
                        <TabsTrigger value="organisation" onClick={() => { handleClick("/profile/organsation-details") }} className={` ${activeTab2 ? "text-foreground bg-background shadow-sm" : ""} `}  >Organisation Form</TabsTrigger>
                    </TabsList>
                </div>
            </Tabs>
            {children}
        </div>
    )
}
