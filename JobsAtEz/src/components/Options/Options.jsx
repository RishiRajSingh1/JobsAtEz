import React from 'react'
import './Options.scss'
import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <div className="option">
        <div>
          <Link to="/terms">
            <img src="./images/Option1.png" alt="" />
            <h1>Create Account</h1>
            <h3>First you have to create a account  here</h3>
            </Link>
        </div>
        <div>
          <Link to={"/gigs"}>
            <img src="./images/Option2.png" alt="" />
            <h1>Search work </h1>
            <h3>Search the best freelance work here</h3>
            </Link>
        </div>
        <div>
          <Link to={"/add"}>
            <img src="./images/Option3.png" alt="" />
            <h1>Save and apply</h1>
            <h3>Apply or save and start your work</h3>
            </Link>
        </div>
    </div>
  )
}

export default Options