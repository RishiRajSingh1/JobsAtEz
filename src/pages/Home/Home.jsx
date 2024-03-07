import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.scss'
import Banner from '../../components/Banner/Banner'
import Options from '../../components/Options/Options'
import About from '../../components/About/About'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { Footer } from '../../components/Footer/Footer'
import Subscribe from '../../components/NewsSubscription/Subscribe'

const Home = () => {
  return (
    <>
    <div className="Home">
    <div className='Banner'>
        <Navbar/>
        <Banner/>
        <Options/>
    </div>
    <About/>
    <div className="category">
      <h1>Choose Different <span>Category</span> </h1>
      <div className="categorycard">
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      <CategoryCard/>
      </div>
      
    </div>
    <button className='btn' style={{margin:"20px"}}>More Categories</button>
    </div>
    <Subscribe/>
    <Footer/>
   
   
    </>
  )
}

export default Home