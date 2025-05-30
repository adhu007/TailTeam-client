import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axiosInstance from '../API/axiosInstance';
import { toast } from 'react-toastify';

const MyAppointment = () => {

  const { consultantsData , user } = useContext(AppContext)
  const [appointments, setAppointments] = useState([]);


  useEffect(() => {
    if (!user?.id) return;

   const endpoint = `/SlotBookings/${user.id}`
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get(endpoint);
        setAppointments(res.data);
      } catch (err) {
        console.error('Error fetching bookings', err);
      }
    };

    fetchBookings();

  }, [user]);

  // console.log(appointments)
  const getConsultantDetails = (id) => {

    const consultantInfo = consultantsData.find(c => c._id == id)
    //console.log(consultantInfo)
    return consultantInfo;
  };

  const cancelAppointment = async (bookingId) => {

  try {
    const endpoint = `/SlotBookings/cancel/${bookingId}`
    await axiosInstance.put(endpoint);
    toast.warn('Appointment cancelled!');
    setAppointments(prev => prev.filter(a => a.id !== bookingId))
  } catch (error) {
    console.error('Error cancelling appointment:', error);
    toast.error('Failed to cancel appointment');
  }
};

  return (
    <div>
      <p className='pb-3 mt-12 text-lg font-medium border-gray-300 border-b'>My Appointments</p>
      <div className='mt-10 ml-10 text-gray-400'>{appointments.length === 0 ? 'Ops! You dont have any appointments at present.' : ''}</div>
      <div>
        {appointments.map((appointment, index) => {

          
          const consultant = getConsultantDetails(appointment.consultantId);
          //console.log(consultant)
          if (!consultant) return null;

          const bookingDate = new Date(appointment.slotDate);
          const formattedDate = bookingDate.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
          });
          const formattedTime = appointment.slotTime?.substring(0, 5); 

          
          return (

          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 shadow-lg mb-2 mt-4' key={index}>
            <div>
              <img className='w-32 bg-zinc-100' src={consultant.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-zinc-800 font-semibold'>{consultant.name}</p>
              <p className='text-zinc-800 font-medium '>{consultant.speciality} consultant</p>
              <p className='text-zinc-800 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{consultant.address.line1}</p>
              <p className='text-xs'>{consultant.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-zinc-800 font-medium' >Date & Time: </span>{formattedDate} | {formattedTime}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-zinc-500 text-center sm:min-w-48 py-2 border border-gray-300 shadow-lg rounded mb-2 mr-2 hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
              <button onClick={ () => cancelAppointment(appointment.id)} className='text-sm text-zinc-500 text-center sm:min-w-48 py-2 border border-gray-300 shadow-lg rounded mr-2 hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
            </div>
          </div>
        );
})}
      </div>
    </div>
  )
}

export default MyAppointment