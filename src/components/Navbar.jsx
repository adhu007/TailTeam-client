import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const navigate = useNavigate()

    const {getTotalCartItems, cartItems} = useContext(ShopContext)

    const {user, logout}  = useContext(AppContext)

    const [showMenu, setShowMenu] = useState(false)
    

    const handleLogout = () => {
    logout();
    };

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>

            <div className='flex items-center'>
                <img onClick={() => navigate('/')} className='h-20 w-20 cursor-pointer' src={assets.logo} alt="" />
                <h1 className='text-3xl font-bold py-3'>TailTeam</h1>
            </div>


            <div className='flex gap-7'>
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink to='/'>
                        <li className='py-3'>HOME</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/consultants'>
                        <li className='py-3'>CONSULTANTS</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/shop'> 
                        <li className='py-3'>SHOP</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/about'>
                        <li className='py-3'>ABOUT</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='contact'>
                        <li className='py-3'>CONTACT</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to='/cart'>
                        <li className='py-3'><img  className='w-5' src={assets.cartIcon} alt="" /></li>
                        {Object.values(cartItems).some(qty => qty > 0) ? (<div  className='w-4 h-4 flex justify-center items-center mt-[-40px] ml-[16px] rounded-full text-xs bg-red-700 text-white'>{getTotalCartItems()}</div>) : (null)}
                    </NavLink>
                </ul>
                <div className='flex items-center gap-4' >
                    {
                        user
                            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                                <div className='absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 bg-stone-100 opacity-85 rounded flex flex-col gap-4 p-4'>
                                        <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                        <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                        <p className='hover:text-black cursor-pointer'>My Orders</p>
                                        <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-medium hidden md:block'>Create account</button>
                    }
                    <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

                    {/* Menu items */}
                    <div className={` ${ showMenu ? 'fixed w-full' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                        <div className='flex items-center justify-between px-5 py-6'>
                            <img className='w-20' src={assets.logo} alt="" />
                            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                        </div>
                        <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
                            <NavLink  to='/' onClick={() => setShowMenu(false)}> <li className='px-4 py-2 rounded inline-block'>HOME</li> </NavLink>
                            <NavLink to='/consultants' onClick={() => setShowMenu(false)} > <li className='px-4 py-2 rounded inline-block'>CONSULTANTS</li> </NavLink>
                            <NavLink to='/shop' onClick={() => setShowMenu(false)}> <li className='px-4 py-2 rounded inline-block'>SHOP</li></NavLink>
                            <NavLink to='/about' onClick={() => setShowMenu(false)}> <li className='px-4 py-2 rounded inline-block'>ABOUT</li></NavLink>
                            <NavLink to='/contact' onClick={() => setShowMenu(false)}> <li className='px-4 py-2 rounded inline-block'>CONTACT</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar