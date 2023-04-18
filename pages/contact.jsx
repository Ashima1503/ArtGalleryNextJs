import React from 'react'
import Contact from '../components/Contact'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar';


const contact = () => {
  return (
    <div>
       <Navbar />
        <Hero2 heading='Contact Me For Collaboration' message='Fill the form given below for collaboration.' />
        <Contact />
    </div>
  )
}

export default contact