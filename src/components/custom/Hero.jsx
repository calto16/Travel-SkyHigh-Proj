import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='relative flex flex-col items-center gap-9 min-h-screen bg-cover bg-center' 
         style={{ backgroundImage: "url('/back.jpg')" }}>
      
      {/* Overlay with reduced transparency */}
      <div className='absolute inset-0 bg-black opacity-40 -z-10'></div>

      <h1 className='font-extrabold text-[40px] lg:text-[50px] text-center mt-16 z-10'>
        <span className='text-[#FFFFFF]'>Discover Your Next Adventure with AI:</span> <br />Personalized Itineraries at Your Fingertips
      </h1>
      <p className='text-xl lg:text-2xl text-[black] text-center z-21 mt-18 lg:mt-18'>
           Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
     </p>
      <div style={{height:"14rem"}}></div>
   
      <Link to={'/create-trip'} className='z-6'>
        <Button className='text-white bg-gradient-to-r from-[#5b5bdf] to-[#197a9a] text-xl lg:text-2xl py-4 px-8 rounded-full transition-transform transform hover:scale-110 hover:shadow-lg hover:from-[#3e9bb9] hover:to-[#1bb3f0]'>
          Get Started, It's Free
        </Button>
      </Link>

      <div className='mt-6 z-10'>
        {/* <img src='/landing.png' className='' alt='Landing Image' /> */}
      </div>
    </div>
  )
}

export default Hero
