import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary shadow-lg rounded-lg px-6 md:px-10 lg:px-20'>

        <div className='md:w-1/3 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl text-amber-50 font-semibold leading-tight md:leading-tight lg:leading-tight '>Book Appointment <br /> With Specialists</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-amber-50 text-sm font-light'>
                <img className='w-28 rounded-full' src={assets.people_avatars} alt="" />
                <p>We take care of your loved ones,<br className='hidden sm:block'/> schedule your appointment hassle-free.</p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </a>
        </div>

        <div className='md:w-2/3 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg'  src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header