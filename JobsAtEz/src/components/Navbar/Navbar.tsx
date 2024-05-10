import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.scss';
import newRequest from '../../utils/newRequest';
import { ModeToggle } from '../ThemeToggleButton/ToggleButton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";


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
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="navbar">
        <div className="logo" >
          <Link className="link flex dark:text-white" to="/">
            <img className='mt-3' src="/images/Logo.png" alt="JobsAtEz" style={{ width: '40px', height: '40px' }}/>
            <TypewriterEffectSmooth words={words} className='text-2xl' />
          </Link>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/gigs">Explore</Link>
          {/* {!currentUser?.isSeller && <span>Become a Seller</span>} */}
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
                      <Link className="link dark:text-white" to="/mygigs">
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
import * as React from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
// import { cn } from "@/utils/cn";

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//     const [open, setOpen] = useState(false);
//     const [loggingOut, setLoggingOut] = useState(false); // State to track logout process
//     const { pathname } = useLocation();
//     const navigate = useNavigate();
  
//     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
//     const handleLogout = async () => {
//       const confirmLogout = window.confirm('Are you sure you want to logout?');
//       if (confirmLogout) {
//         try {
//           setLoggingOut(true); // Set loggingOut state to true when logout process starts
//           await newRequest.post('/auth/logout');
//           localStorage.removeItem('currentUser');
//           navigate('/'); // Redirect to home page after logout
//         } catch (err) {
//           console.log(err);
//         } finally {
//           setLoggingOut(false); // Reset loggingOut state after logout process finishes
//         }
//       }
//     };
  
//     // Disable user interactions while logging out
//     if (loggingOut) {
//       return null; // Render nothing if logging out
//     }
//     const words = [
//       {
//         text: "Jobs",
//       },
//       {
//         text: "At",
//       },
//       {
//         text: "Ez...",
//         className: "text-blue-500 dark:text-blue-500",
//       },
//     ];
//   return (
//     <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//         <div className="flex justify-center">
//           <img className='h-10 w-10 flex items-center mt-2 mr-2' src="/images/Logo.png" alt="" />
//           <TypewriterEffectSmooth words={words} />
//         </div>
//         <MenuItem setActive={setActive} active={active} item="Home" />
//         <MenuItem setActive={setActive} active={active} item="About" />
//         {!currentUser?.isSeller && <span>Become a Seller</span>}
//          {currentUser ? (
//             <div className="user" onClick={() => setOpen(!open)}>
//               <img
//                 src={currentUser.img || './images/noprofile.png'}
//                 alt="Profile"
//                 style={{ width: '30px', height: '30px', borderRadius: '50%' }}
//               />
//               <span>{currentUser?.username}</span>
//               {open && (
//                 <div className="options">
//                   {currentUser.isSeller && (
//                     <>
//                       <Link className="link" to="/mygigs">
//                         Gigs
//                       </Link>
//                       <Link className="link" to="/add">
//                         Add New Gig
//                       </Link>
//                     </>
//                   )}
//                   <Link className="link" to="/profile">
//                     Profile
//                   </Link>
//                   <Link className="link" to="/orders">
//                     Orders
//                   </Link>
//                   <Link className="link" to="/messages">
//                     Messages
//                   </Link>
//                   <span className="link" onClick={handleLogout}>
//                     Logout
//                   </span>
//                 </div>
//               )}
//                       </div>
//           ) : (
//             <>
//               <Link to="/login" className="link">
//                 Sign in
//               </Link>
//               <Link className="link" to="/terms">
//                 <button>Join</button>
//               </Link>
//             </>
//           )}
//           <ModeToggle/>
//         </div>
//         <MenuItem setActive={setActive} active={active} item="User" />
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }

// export default Navbar;
