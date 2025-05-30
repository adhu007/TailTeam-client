import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const VetConsultants = () => {

  const { speciality } = useParams()
  const [filterConsultant, setFilterConsultant] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const { consultantsData } = useContext(AppContext)

  const navigate = useNavigate()

  const applyFilter = () => {

    if (speciality) {

      setFilterConsultant(consultantsData.filter(d => d.speciality === speciality))

    }
    else {
      setFilterConsultant(consultantsData)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [consultantsData, speciality])

  return (
    <div>
      <p className='text-gray-600 '>Browse through the specialities.</p>

      <div className='flex flex-col sm:flex-row items-start gap-10 mt-10'>
        <button onClick={() => setShowFilter( prev => !prev)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${ showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>

          <p onClick={() => speciality === 'Canine(dogs)' ? navigate('/consultants') : navigate('/consultants/Canine(dogs)')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Canine(dogs)" ? "bg-amber-100 text-black" : ""}`}>Canine(dogs)</p>

          <p onClick={() => speciality === 'Feline(cats)' ? navigate('/consultants') : navigate('/consultants/Feline(cats)')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Feline(cats)" ? "bg-amber-100 text-black" : ""}`}>Feline(cats)</p>

          <p onClick={() => speciality === 'Livestock' ? navigate('/consultants') : navigate('/consultants/Livestock')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Livestock" ? "bg-amber-100 text-black" : ""}`}>Livestock</p>

          <p onClick={() => speciality === 'Avian(birds)' ? navigate('/consultants') : navigate('/consultants/Avian(birds)')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Avian(birds)" ? "bg-amber-100 text-black" : ""}`}>Avian(birds)</p>

        </div>
        <div className='w-full grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 gap-y-6'>
          {
            filterConsultant.map((d, index) => (
              <div key={index} className='border border-zinc-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500'>
                <img className='bg-zinc-100' src={d.image} alt="" />
                <div onClick={() => navigate(`/appointment/${d._id}`)} className='p-4 cursor-pointer'>
                  {/* <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                           <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div> */}
                  <p className='text-lg font-medium text-gray-900 '>{d.name}</p>
                  <p className='text-gray-600 text-sm'>{d.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default VetConsultants