'use client';

// System imports
import React from 'react'

// Component imports
import Home from '@/components/custom/Home'
import Navbar from '@/components/custom/Navbar'


const Page = () => {
  return (
    <React.Fragment>
      <main className=' h-fit w-screen flex flex-col'>
        <Navbar />
        <Home />
      </main>
    </React.Fragment>
  )
}

export default Page