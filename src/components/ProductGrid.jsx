import React, { useEffect, useState } from 'react'
import product_data from '../shopassets/all_product'
import Item from './Item'

const ProductGrid = () => {

  

  return (
    <div className='flex flex-col justify-center items-center gap-3 w-full md:mt-0 mt-20'>
      <div className='marquee-container'>
         <h1 className='text-gray-600 text-3xl marquee-text '><span className='text-5xl text-yellow-400 font-bold'>Sale is Live!🎁🎉</span> UP TO 50% Off on all products🤩</h1>
      </div>
       
        <hr className='w-full mt-5 text-gray-400 rounded-lg bg-gray-800' />
        <div className='mt-15 w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-7 gap-y-10 overflow-hidden'>
            {product_data.map((item,index)=> {
                return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default ProductGrid