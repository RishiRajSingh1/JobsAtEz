import React from 'react'
import "./Banner.scss"

const Banner = () => {
  return (
    <div className="banner">
    <div className="left">
        <div className="textbox">
        <h1>Are You Looking For Freelancer</h1>
        <h3>Hire Great Freelancers, Fast. GobsAtEz helps you hire elite freelancers at a moment's notice</h3>
        </div>
        <div className="buttons">
            <button>Hire A Freelancer</button>
            <input placeholder='Search Freelancer Work' type="text" />
        </div>
    </div>
    <div className="right">
        <img src="../../../public/images/BannerImage.png" alt="" />
    </div>
    </div>
  )
}

export default Banner