import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-amber-800 font-medium'>US</span></p>
      </div>

      <div className='flex my-10 flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[330px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nulla ipsum quis qui error consequatur aliquam pariatur at incidunt illum accusantium officiis, voluptatibus placeat expedita debitis iste possimus asperiores quae?</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quae incidunt magnam quisquam nihil numquam saepe magni sapiente, esse ipsa adipisci hic repellat vitae. Cum voluptate unde quod magnam error.</p>
        </div>
      </div>

      <div className='text-xl my-4 text-center'>
        <p>WHY <span className='text-amber-800 font-medium'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 mt-10'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis similique qui enim corporis officia est</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis similique qui enim corporis officia est</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis similique qui enim corporis officia est</p>
        </div>
      </div>

    </div>
  )
}

export default About