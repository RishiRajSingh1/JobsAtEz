import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    
    <div className="navbar">
        <img src='../../../public/images/logo.png'/>
        <div className='links'>
        <Link to ="/Home">Home</Link>
        <Link to ="/FindWork">Find Work</Link>
        <Link to ="/FindFreelancer"> Find Freelancer</Link>
        <Link to ="/login">Log In</Link>
        <Link to ="/register">Sign Up</Link>
        <button>Post A Project</button>

        </div>
    
    </div>

    
  )
}

export default Navbar;