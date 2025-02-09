import React from 'react'
import { useUser } from '@clerk/nextjs'
const page = () => {
  const {user,isLoaded,isSignedIn}=useUser()
  return (
    
    <div>page</div>
  )
}

export default page