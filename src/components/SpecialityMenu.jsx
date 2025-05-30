import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our various specialities, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-25 pt-5 w-full overflow-scroll'>
                {specialityData.map((s,index)=>(
                    <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/consultants/${s.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2 rounded-full bg-zinc-100' src={s.image} alt="" />
                        <p>{s.speciality}</p>
                    </Link>
                ))}
        </div>
    </div>
  )
}

export default SpecialityMenu