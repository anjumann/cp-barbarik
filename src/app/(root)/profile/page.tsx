import React from 'react'
import { PersonalDetail } from '@/components/profile/PersonalDetail'
import { redirect } from 'next/navigation'

const page = () => {
  redirect("/profile/personal-details")

}

export default page