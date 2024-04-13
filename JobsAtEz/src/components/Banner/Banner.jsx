import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import "./Banner.scss";

const Banner = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/gigs?search=${input}`);
  }

  return (
    <div className="banner">
      <div className="left">
        <div className="textbox">
          <h1>Are You Looking For Freelancer</h1>
          <h3>Hire Great Freelancers, Fast. GobsAtEz helps you hire elite freelancers at a moment's notice</h3>
        </div>
        <div className="buttons">
          <form onSubmit={handleSubmit}>
            <input 
              placeholder='Search Freelancer Work' 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Hire A Freelancer</button>
            
          </form>
        </div>
      </div>
      <div className="right">
        <img src="/images/BannerImage.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
