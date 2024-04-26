import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';
import newRequest from '../../utils/newRequest';
import { ModeToggle } from '../ThemeToggleButton/ToggleButton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false); // State to track logout process
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      try {
        setLoggingOut(true); // Set loggingOut state to true when logout process starts
        await newRequest.post('/auth/logout');
        localStorage.removeItem('currentUser');
        navigate('/'); // Redirect to home page after logout
      } catch (err) {
        console.log(err);
      } finally {
        setLoggingOut(false); // Reset loggingOut state after logout process finishes
      }
    }
  };

  // Disable user interactions while logging out
  if (loggingOut) {
    return null; // Render nothing if logging out
  }

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="navbar">
        <div className="logo">
          <Link className="link" to="/">
            <img src="/images/Logo.png" alt="JobsAtEz" />
          </Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={currentUser.img || './images/noprofile.png'}
                alt="Profile"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
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
                  <Link className="link" to="/profile">
                    Profile
                  </Link>
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <span className="link" onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                Sign in
              </Link>
              <Link className="link" to="/terms">
                <button>Join</button>
              </Link>
            </>
          )}
          <ModeToggle/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
