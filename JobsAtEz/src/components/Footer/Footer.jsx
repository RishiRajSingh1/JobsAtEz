import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
     <div className='Footer'>
        <div className="sec1">
            <img src="./images/logo.png" alt="" />
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
