import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../shopassets/cart_cross_icon.png'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'


const CartItem = () => {


    const { user } = useContext(AppContext);

    const { all_product, cartItems, removeFromCart, getTotalCartAmount, emptyCart } = useContext(ShopContext);


    return (
        <div className='mt-25 mb-25'>
            <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-18 pt-5 pb-5 text-gray-600 text-lg font-semibold'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className=' h-1 text-gray-300' />
            {Object.values(cartItems).some(qty => qty > 0) ? (

                all_product.map((p, index) => {

                    if (cartItems[p.id] > 0) {
                        return <div key={index}>
                            <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-18 pt-5 pb-5 text-gray-600 text-md font-medium '>
                                <img className='h-15' src={p.image} alt="" />
                                <p className='ml-4'>{p.name}</p>
                                <p className='ml-2'>₹{p.new_price}</p>
                                <button className='w-12 ml-4 h-10 border-1 border-gray-300 bg-white'>{cartItems[p.id]}</button>
                                <p className='ml-2'>₹{p.new_price * cartItems[p.id]}</p>
                                <img className='w-4 ml-9 cursor-pointer' src={remove_icon} onClick={() => { removeFromCart(p.id) }} alt="" />
                            </div>
                            <hr className=' h-1 text-gray-300' />
                        </div>
                    }
                    //console.log(cartItems)
                    return null;
                })) : (<p className=" text-gray-500 mt-10">Your cart is empty.</p>)}



            <div className='flex mt-25 mb-25'>
                <div className='flex-1 flex flex-col gap-10 mr-150'>
                    <h1 className='font-bold text-xl'>Cart Totals</h1>
                    <div>
                        <div className='flex justify-between pt-4 pb-4 '>
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between pt-4 pb-4 '>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between pt-4 pb-4 font-semibold text-lg'>
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    {Object.values(cartItems).some(qty => qty > 0) ? (<button className='w-[262px] h-[58px] bg-primary text-white cursor-pointer text-md font-semibold'
                     onClick={() => { if (!user) return toast.warn("Please log in to complete checkout."); toast.success("Order placed! Payment mode will be Cash on Delivery. Thank you for your purchase."); emptyCart() }}>

                        PROCEED TO CHECKOUT
                    </button>) : (<button className='w-[262px] h-[58px] bg-primary text-white cursor-pointer text-md font-semibold'>Continue Shopping</button>)}
                </div>
            </div>
        </div>
    )
}

export default CartItem