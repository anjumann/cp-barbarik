import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalDetail } from '@/components/profile/PersonalDetail'

const page = () => {
  return (
    <div className='px-4  w-full mx-auto mt-10' >
      <Tabs defaultValue="account" className="w-full mx-auto">
        <div className="flexCenter  ">
          <TabsList className='text-xl' >
            <TabsTrigger value="personal" >Personal Form</TabsTrigger>
            <TabsTrigger value="organisation" >Organisation Form</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="personal"> <div className="w-2/3 mx-auto">   <PersonalDetail /> </div> </TabsContent>
        <TabsContent value="organisation"> {"<organisation detail/>"} </TabsContent>
      </Tabs>
    </div>
  )
}

export default page