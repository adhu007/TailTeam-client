import React from 'react'
import arrow_icon from '../shopassets/breadcrum_arrow.png'
const Breadcrum = (props) => {

    const {product} = props;
  return (
    <div className='flex gap-2 items-center text-gray-500 text-md font-medium mb-15 mt-15 capitalize'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum