import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import axios from 'axios'
import axiosInstance from '../API/axiosInstance'
import { toast } from 'react-toastify'

const Appointment = () => {

  const { docId } = useParams()
  const { consultantsData, currencySymbol } = useContext(AppContext)
  const { user, convertTo24Hour } = useContext(AppContext)

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {

    const docInfo = await consultantsData.find(d => d._id === docId)
    setDocInfo(docInfo)
    //console.log(docInfo)
  }

  const getAvailableSlots = async () => {

    setDocSlots([])
    //console.log(docId)
    const endpoint = `/SlotBookings/available-slots/${docId}`
    try {
      const response = await axiosInstance.get(endpoint)
      setDocSlots(response.data) // Should return array of days with time slots
      //console.log(response.data)

    } catch (error) {
      console.error('Error fetching slots:', error)
    }

  }

  const bookAppointment = async () => {
  try {

    const payload = {
      customerId: user.id,
      consultantId: docId,
      slotDate: docSlots[slotIndex].find(s => s.time === slotTime).dateTime,
      slotTime: convertTo24Hour(slotTime),
      status: "Booked",
    }

    console.log(payload)
    const endpoint = '/SlotBookings'
    const response = await axiosInstance.post(endpoint, payload)
    toast.success('Appointment booked successfully!')
  } catch (error) {
    console.error('Booking failed:', error)
    //alert('Failed to book appointment.')
    toast.error('Failed to book appointment.')
  }
}


  useEffect(() => {

    fetchDocInfo()
  }, [consultantsData, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    //console.log(docSlots)
  }, [docSlots])


  return docInfo && (
    <div>


      <div className='flex flex-col sm:flex-row gap-4'>

        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-zinc-100 mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>{docInfo.degree} - Specialized in {docInfo.speciality}</p>
          </div>


          <div className=''>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-900 font-medium mt-4'>
            Appointment charge : <span className='text-gray-950'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* ... Booking Slots */}

      <div className='sm:ml-72 sm:pl-4 mt-7 font-medium text-gray-700'>
        <p className='text-gray-900'>Booking slots</p>
        
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            
            docSlots.length > 0 && docSlots.map((item, index) => {
              if (!item[0]) return null;

              const dateObj = new Date(item[0].dateTime);

              return (
                <div
                  onClick={() => { setSlotIndex(index); console.log(item[0].dateTime); }}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-300'}`}
                  key={index}
                >
                  <p>{daysOfWeek[dateObj.getDay()]}</p>
                  <p>{dateObj.getDate()}</p>
                </div>
              );
            })

          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item, index) => (
              <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-500 border border-gray-300'}`} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
            
          }
        </div>
        
        <button onClick={() => {

          if (!user) {
            toast.warn("Please log in to book an appointment.");
            return;
          }
          if (!slotTime) {
            toast.warn("Please select a time slot.");
            return;
          }

           // console.log(slotIndex, slotTime)
           bookAppointment()

        }}


          className='bg-primary text-white text-sm font-light px-8 py-3 rounded-full my-10 hover:bg-amber-700'>Book an appointment</button>

      </div>

    </div>
  )
}

export default Appointment