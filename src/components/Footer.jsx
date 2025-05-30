import React from 'react'
import { assets } from '../assets/assets'
import whatsapp_icon from '../shopassets/whatsapp_icon.png'
import insta_icon from '../shopassets/instagram_icon.png'


const Footer = () => {
  return (
    <div className='md:mx-10'>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <div onClick={() => scrollTo(0,0)} className='flex items-center mb-5'>
                        <img className='h-15 w-15' src={assets.logo} alt="" />
                        <h3 className='text-xl font-bold py-3'>TailTeam</h3>
                </div>

                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis a nihil dolore maiores illo cum architecto corporis impedit sequi accusantium explicabo veritatis incidunt minima vitae, sapiente corrupti error molestias.</p>
            </div>



            {/* <div>
                    <p className='text-xl font-medium mb-5 mt-4'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>

            </div> */}



            <div>
                    <p className='text-xl font-medium mb-5 mt-4'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-000-000-0000</li>
                        <li>capstoneprojectICTAK@gmail.com</li>
                    </ul>
                    <ul className='flex gap-3 mt-3'>
                        <li ><img className='w-5 cursor-pointer' src={whatsapp_icon} alt="" /></li>
                        <li><img className='w-5 cursor-pointer' src={insta_icon} alt="" /></li>
                    </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @ TailTeam.dev - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer