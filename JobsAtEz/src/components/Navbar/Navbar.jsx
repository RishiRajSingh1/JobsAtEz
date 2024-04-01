import React, { useState,useEffect, } from 'react'
import {Link ,useNavigate,useLocation} from 'react-router-dom'
import './Navbar.scss'
import newRequest from "../../utils/newRequest";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate=useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
    <div className="navbar">
      <div className="logo">
        <Link className="link" to="/">
          <img src="/images/Logo.png" alt="" />
        </Link>
      </div>
      <div className="links">
        <span>JobAtEz Business</span>
        <span>Explore</span>
        <span>English</span>
        {!currentUser?.isSeller && <span>Become a Seller</span>}
        {currentUser ? (
          <div className="user" onClick={() => setOpen(!open)}>
            <img src={currentUser.img || "/images/noprofile.png"} alt="" style={{width:"30px",height:"30px", borderRadius:"50%"}}/>
            <span>{currentUser?.username}</span>
            {open && (
              <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="link">Sign in</Link>
            <Link className="link" to="/register">
              <button>Join</button>
            </Link>
          </>
        )}
      </div>
    </div>
  </div>

    
  )
}

export default Navbar;