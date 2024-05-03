import React from 'react'
import Navbar from '../components/Navbar'
import Brownpart from '../HomeFile/Homebrown'
import Homegoods from '../HomeFile/Homegoods'
import Homephone from '../HomeFile/Homephone'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Navbar />
      <body className='h-[calc(100vh-80px)] overflow-y-scroll'>
        <Brownpart />
        <Homegoods />
        <Homephone />
        <Footer />
      </body>
    </>
  )
}

export default Home