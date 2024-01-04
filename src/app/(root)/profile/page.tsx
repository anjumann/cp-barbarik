import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  redirect('/profile/personal-details')

}

export default page