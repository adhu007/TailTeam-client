import React from 'react'
import hand_icon from '../shopassets/hand_icon.png'
import arrow_icon from '../shopassets/arrow.png'
import hero_image from '../shopassets/hero_image.png'

const ShopBanner = () => {
  return (

    <div className='h-[80vh] flex flex-col md:flex-row bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] '>
        {/* left portion*/}
        <div className='flex-1 flex flex-col pt-20 gap-5 pl-30 leading-relaxed '>
            <h2 className='text-gray-900 text-2xl font-bold'>NEW ARRIVALS</h2>
            <div className='flex flex-col'>
                {/* hand icon */}
                <div className='flex items-center gap-3'> 
                    <p className='text-gray-800 text-[50px] font-extrabold'>One of a kind</p>
                    <img className='w-18' src={hand_icon} alt="" />
                </div>
                <p className='text-gray-800 text-[50px] font-extrabold'>Exclusive Store</p>
                <p className='text-gray-800 text-[50px] font-extrabold'>For Pets</p>
            </div>
            {/* latest btn */}
            <div className='flex justify-center items-center gap-2 w-54 rounded-full mt-8 bg-amber-700 text-white text-md font-medium pt-3 pb-3'>
                <div>Unique Collections</div>
                <img className='w-5' src={arrow_icon} alt="" />
            </div>
        </div>
        {/* Right portion*/}
        <div className=' flex items-center justify-center'>
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default ShopBanner