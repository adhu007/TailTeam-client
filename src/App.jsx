import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import VetConsultants from './pages/VetConsultants'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] '>

    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/consultants' element={<VetConsultants/>}/>
      <Route path='/consultants/:speciality' element={<VetConsultants/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-appointment' element={<MyAppointment/>}/>
      <Route path='/appointment/:docId' element={<Appointment/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </div>
  )
}

export default App