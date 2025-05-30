import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-amber-800 font-medium'>US</span></p>
      </div>

      <div className='flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-xl' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit <br />Kochi, Kerala</p>
          <p className='text-gray-500'>Ph: (+91) 000-000-0000 <br /> capstoneprojectICTAK@gmail.com</p>
        </div>
      </div>

    </div>
  )
}

export default Contact