import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axiosInstance from '../API/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const [state, setState] = useState('Login')
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const {login}  = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const payload =
      state === 'Sign Up'
        ? { fullName: name, email, password, role: 'Customer' }
        : { email, password };

    const endpoint = state === 'Sign Up' ? '/Auth/register' : '/Auth/login';

    try {
      const res = await axiosInstance.post(endpoint, payload);

      if (state === 'Sign Up') {
        alert('Registration successful! Please log in.');
        setState('Login');
      } else {
        login(res.data.token);
        //alert('Login successful!');
        toast.success('Login successful!');
        navigate('/')
        
      }
    } catch (err) {
      //alert(err.response?.data || 'An error occurred');
      toast.error(err.response?.data || 'An error occurred');
    }
  };

  return (

    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-xl'>
        
        <p className='text-2xl font-semibold w-full text-center'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        
        
        <p className='w-full text-center text-zinc-400'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {
          state === 'Sign Up' &&
          <div className='w-full flex flex-col'>
          <label htmlFor="userName">Full Name</label>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" name="" id="userName" onChange={(e) => setName(e.target.value)} value={name} required/>
          </div>
        }
        
        <div className='w-full flex flex-col'>
          <label htmlFor="userEmail">Email</label>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" name="" id="userEmail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor="userPassword">Password</label>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" name="" id="userPassword" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
        <button type='submit' className='rounded-md w-full text-white bg-primary text-base py-2 mt-4'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        { state === 'Sign Up'
         ? <p className='mt-2'>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span> </p> : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p> 
         }
      </div>
    </form>
  )
}

export default Login