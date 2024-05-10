import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'
import Logo from "../../utils/Logo"

export const Footer = () => {
  const words = [
    {
      text: "Jobs",
    },
    {
      text: "At",
    },
    {
      text: "Ez...",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  
  
  return (
    <>
     <div className='Footer'>
        <div className="sec1">
            <img className='h-20 w-20' src="./images/Logo.png" alt="" />
            <div><TypewriterEffectSmooth words={words} className='text-2xl'/></div>
            {/* <h1 style={{fontSize:"30px"}}>Jobs At <span style={{color:"blue"}}>Ez</span></h1> */}
            <Link>Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</Link>
            <div className="social"></div>
        </div>
        <div className="sec2">
            <h3 >For Clients</h3>
            <Link to="/gigs">Find Freelancers</Link>
            <Link to={"/add"}>Post Project</Link>
            <Link to={"/refund"}>Refund Policy</Link>
            <Link to={"/privacy"}>Privacy Policy</Link>
        </div>
        <div className="sec3">
            <h3>For Freelancers</h3>
            <Link to={"/gigs"}>Find Work</Link>
            <Link to="/register">Create Account</Link>
        </div>
        <div className="sec4">
            <h3>Call Us</h3>
            <Link>India</Link>
            <Link>+91 999999999</Link>
            <Link>rishisinghrajputr2gmail.com</Link>
        </div>
     </div>
     <h3>2024 JobAtEz. All right reserved</h3>
    </>
   
  )
}
