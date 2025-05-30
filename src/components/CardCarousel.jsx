import React, { useContext } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const CardCarousel = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive:[
            {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
            }

        ]
      };

    const navigate = useNavigate()
    const {consultantsData} = useContext(AppContext)

  return (
    <div className=' my-16 gap-4 flex flex-col text-gray-900'>

        <div className='flex flex-col items-center gap-4'>
        <h1 className='text-3xl font-medium'>Talk to Experts</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted partners.</p>
        </div>
        
        <div className='mt-7 w-full'>
        <Slider {...settings}>
            {
                consultantsData.map((d, index) => (

                 <div key={index} className=' h-[340px] text-black rounded-xl overflow-hidden '>

                    <div className=' h-47 bg-zinc-100 flex justify-center items-center relative '>
                        <img src={d.image} alt="" className='h-38 w-38 absolute bottom-0 rounded-full ' />
                    </div>

                    <div onClick={()=> {navigate(`/appointment/${d._id}`);}} className='flex flex-col justify-center rounded-b-xl items-center gap-2 p-4 bg-zinc-200 cursor-pointer hover:bg-zinc-300'>
                        
                        
                        <p className='text-lg font-medium text-gray-900 '>{d.name}</p>
                        <p className='text-gray-600 text-sm'>{d.speciality} specialist</p>
                    </div>

                </div>
                   
                    

                ))
            }
            </Slider>
        </div>
    </div>
  )
}

export default CardCarousel