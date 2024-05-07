import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Banner.scss";
import { Input } from "@/components/ui/input";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { motion } from "framer-motion";
// import { LampContainer } from "../ui/lamp";
import Logo from '../../utils/Logo';

const Banner = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gigs?search=${input}`);
  }

  return (
    <div className="banner">
      <div className="left">
        <div className="textbox">
          <TextRevealCard className='bg-transparent b-0'
          text='Are You Looking For Freelancers &#129300;'
          revealText='We got the best out of best for you &#128512;'
          ></TextRevealCard>
          {/* <h1>Are You Looking For Freelancers</h1> */}
          {/* <h3>Hire Great Freelancers, Fast. GobsAtEz helps you hire elite freelancers at a moment's notice</h3> */}
        </div>
        <div className="buttons">
          <form onSubmit={handleSubmit}>
            <Input 
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
       {/* <Logo /> */}
      </div>
    </div>
  );
};

export default Banner;
