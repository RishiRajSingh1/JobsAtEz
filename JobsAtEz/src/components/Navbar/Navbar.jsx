import React from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const nevigate=useNavigate();
  return (
    
    <div className="navbar">
        <img src='../../../public/images/logo.png'/>
        <div className='links'>
        <Link to ="/Home">Home</Link>
        <Link to ="/FindWork">Find Work</Link>
        <Link to ="/FindFreelancer"> Find Freelancer</Link>
        <Link to ="/login">Log In</Link>
        <Link to ="/register">Sign Up</Link>
        <button onClick={() => nevigate("/addGig")}>Add New Gig</button>
        </div>
    
    </div>

    
  )
}

export default Navbar;