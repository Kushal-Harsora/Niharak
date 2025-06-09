import Home from '@/components/custom/Home'
import Navbar from '@/components/custom/Navbar'
import React from 'react'

const page = () => {
  return (
    <React.Fragment>
      <main className=' h-fit w-screen flex flex-col'>
        <Navbar />
        <Home />
      </main>
    </React.Fragment>
  )
}

export default page