import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <>
     <div className='Footer'>
        <div className="sec1">
            <img src="../../../public/images/logo.png" alt="" />
            <p>Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</p>
            <div className="social"></div>
        </div>
        <div className="sec2">
            <h3>For Clients</h3>
            <p>Find Freelancers</p>
            <p>Post Project</p>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
        </div>
        <div className="sec3">
            <h3>For Freelancers</h3>
            <p>Find Work</p>
            <p>Create Account</p>
        </div>
        <div className="sec4">
            <h3>Call Us</h3>
            <p>India</p>
            <p>+91 9887451255</p>
            <p>jobsatez@org.in</p>
        </div>
     </div>
     <h3>2024 JobAtEz. All right reserved</h3>
    </>
   
  )
}
