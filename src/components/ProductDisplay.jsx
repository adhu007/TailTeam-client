import React, { useContext } from 'react'
import star_icon from '../shopassets/star_icon.png';
import star_dull_icon from '../shopassets/star_dull_icon.png';
import { ShopContext } from '../context/ShopContext';


const ProductDisplay = (props) => {


    const { product } = props;

    const {addToCart} = useContext(ShopContext);

    return (
        <div className='flex '>
            {/* left */}
            <div className='flex gap-4'>
                <div className='flex flex-col gap-3'>
                    <img className='h-[100px] p-5 bg-gray-200' src={product.image} alt="" />
                    <img className='h-[100px] p-5 bg-gray-200' src={product.image} alt="" />
                    <img className='h-[100px] p-5 bg-gray-200' src={product.image} alt="" />
                    <img className='h-[100px] p-5 bg-gray-200' src={product.image} alt="" />
                </div>
                <div>
                    <img className='p-20 h-[438px] w-[595px] bg-gray-200' src={product.image} alt="" />
                </div>
            </div>
            {/* Right */}
            <div className='ml-15 flex flex-col'>
                <h1 className='text-gray-700 font-bold text-3xl'>{product.name}</h1>
                <div className='flex items-center mt-3 gap-1 text-gray-900 text-md'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(123)</p>
                </div>
                <div className='flex mt-10 mb-10 gap-7 font-bold text-2xl'>
                    <div className='text-gray-500 line-through'>
                        ₹{product.old_price}
                    </div>
                    <div className='text-primary'>
                        ₹{product.new_price}
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolore consequatur provident soluta quaerat. Eos, eveniet.
                </div>
                <button onClick={() => {addToCart(product.id)}} className=' pt-5 pb-5 w-[300px] text-lg font-bold text-white bg-primary cursor-pointer mt-10 hover:scale-105 hover:bg-amber-700 transition-all duration-300'>ADD TO CART</button>

                

            </div>
        </div>
    )
}

export default ProductDisplay