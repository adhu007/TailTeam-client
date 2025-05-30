import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyProfile = () => {

  const {user} = useContext(AppContext);
  
  const [userData, setUserData] = useState({
    name: "Adarsh Das",
    image: assets.profile_pic,
    email: 'xyz@gmail.com',
    phone: '+91 000 000 0000',
    address: {
      line1: 'Lorem ipsum dolor',
      line2: 'sit amet consectetur'
    },
    petName: 'Leo',
    petBreed: 'rottweiler',
    petGender: 'Male',
    petAge: 2
  })

  useEffect(() => {
  if (user?.name) {
    setUserData(prev => ({
      ...prev,
      name: user.name
    }));
  }
}, [user]);


  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-30 rounded border' src={userData.image} alt="" />
      {
        isEdit ?
          <input className='bg-gray-200 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>

      }

      <hr className='bg-zinc-400 h-[1px] border-none ' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-gray-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit ?
              <input className='bg-gray-200 max-w-43' type="tel" value={userData.phone} onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-gray-500'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit ?
              <p>
                <input className='bg-gray-200 ' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-200 ' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>

              : <p className='text-gray-500'>
                {userData.address.line1}
                <br/>
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC PET INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Name:</p>
          {
            isEdit ?
              <input className='max-w-43 bg-gray-200' type="text" value={userData.petName} onChange={(e) => setUserData(prev => ({ ...prev, petName: e.target.value }))} />
              : <p className='text-gray-500'>{userData.petName}</p>

          }
          <p className='font-medium'>Breed:</p>
          {
            isEdit ?
              <input className='max-w-43 bg-gray-200' type="text" value={userData.petBreed} onChange={(e) => setUserData(prev => ({ ...prev, petBreed: e.target.value }))} />
              : <p className='text-gray-500'>{userData.petBreed}</p>

          }
          <p className='font-medium'>Age:</p>
          {
            isEdit ?
              <input className='max-w-43 bg-gray-200' type="number" value={userData.petAge} onChange={(e) => setUserData(prev => ({ ...prev, petAge: e.target.value }))} />
              : <p className='text-gray-500'>{userData.petAge}</p>

          }
          <p className='font-medium'>Gender:</p>
          {
            isEdit ?
              <select className='max-w-43 bg-gray-200' onChange={(e) => setUserData(prev => ({ ...prev, petGender: e.target.value }))} value={userData.petGender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-500'>{userData.petGender}</p>

          }


        </div>
      </div>
      <div className='mt-10'>
        {
          isEdit ?
            <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save information</button>
            : <button className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile