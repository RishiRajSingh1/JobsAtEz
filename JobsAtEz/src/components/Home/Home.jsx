import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'
import Banner from '../Banner/Banner'
import Options from '../Options/Options'
import About from '../About/About'
import CategoryCard from '../CategoryCard/CategoryCard'

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
    <button className='btn'>More Categories</button>
    <button className='btn'>More Categories</button>
    </div>
    
   
   
    </>
  )
}

export default Home