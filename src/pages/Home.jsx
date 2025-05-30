import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import CardCarousel from '../components/CardCarousel'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <CardCarousel/>
        <Banner/>
    </div>
  )
}

export default Home