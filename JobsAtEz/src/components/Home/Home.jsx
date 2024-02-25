import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'
import Banner from '../Banner/Banner'
import Options from '../Options/Options'
import About from '../About/About'

const Home = () => {
  return (
    <>
    <div className='Banner'>
        <Navbar/>
        <Banner/>
        <Options/>
    </div>
    <About/>
   
   
    </>
  )
}

export default Home