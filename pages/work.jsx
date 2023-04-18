import React from 'react'
import Hero2 from '../components/Hero2'
import Portfolio from '../components/Portfolio'
import Navbar from '../components/Navbar';


const work = () => {
  return (
    <div>
       <Navbar />
        <Hero2 heading='My ARTWORK' message='This is some of my Art work i had done till now.' />
        <Portfolio />
    </div>
  )
}

export default work