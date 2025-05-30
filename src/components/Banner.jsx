import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='flex bg-gradient-to-b from-[#c26838] to-[#ee8ec9]  rounded-lg px-6 sm:px-10 md:px-14 my-25 md:mx-2'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-50'>
                    <p>Exclusive Store</p>
                    <p className='mt-4'>Pawsitively Everything Your Pet Needs</p>
                </div>
                <button className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all' onClick={() => {navigate('/shop'); scrollTo(0,0)}} >Let's Shop</button>
        </div>
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.LetShop} alt="" />
        </div>
    </div>
  )
}

export default Banner