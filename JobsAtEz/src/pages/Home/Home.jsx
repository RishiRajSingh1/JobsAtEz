import React, { useState } from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Options from '../../components/Options/Options';
import About from '../../components/About/About';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { Footer } from '../../components/Footer/Footer';
import Subscribe from '../../components/NewsSubscription/Subscribe';
import categories from "../../data/data.json";
import { Link } from 'react-router-dom';
// import { HoverEffect } from "../../components/ui/card-hover-effect";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleCategories = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="Home">
        <div className='Banner'>
          <Banner/>
          <Options/>
        </div>
        <About/>
        <div className="category">
          <h1>Choose Trending <span>Category</span> </h1>
          <div className="categorycard">
            {categories.slice(0, expanded ? categories.length : 4).map((item, index) => (
              <CategoryCard key={index} item={item}/>
            ))}
          </div>
          <button className='btn' style={{margin:"20px" ,cursor:"pointer"}} onClick={toggleCategories}>
            <span style={{color:"white"}}>
              {expanded ? "Show Less Categories" : "More Categories"}
            </span>
          </button>
        </div>
      </div>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default Home;
