import React from 'react'
import { Link } from 'react-router-dom'


const Item = (props) => {
  return (
    <div className='transform hover:scale-105  transition-all duration-500 '>
       <Link to={`/product/${props.id}`}> <img onClick={()=>scrollTo(0,0)} className='bg-gray-200 p-8 w-full ' src={props.image} alt="" /> </Link>

       <div className='border border-gray-300'>
          <p className='mt-4 ml-3 mb-2 text-lg'>{props.name}</p>
        {/* item price */}
        <div className='flex gap-5 ml-4'> 
            {/* item price new */}
            <div className='text-gray-700 text-xl font-bold'>
                   ₹{props.new_price}
            </div>
            {/* item price old */}
            <div className='text-gray-500 text-lg font-medium line-through'>
                    ₹{props.old_price}
            </div>
        </div>
       </div>
        
    </div>
  )
}

export default Item