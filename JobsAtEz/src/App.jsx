import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import './App.css'
import Register from './pages/register/Register'
import { QueryClient, QueryClientProvider } from 'react-query';
import AddGig from './pages/AddGig/AddGig'
import Gigs from './pages/gigs/Gigs'
import MyGigs from './pages/myGigs/MyGigs'
import Gig from './pages/gig/Gig'
import Pay from './pages/pay/Pay'
import Orders from './pages/orders/Orders'
import Success from './pages/success/Success'
import Terms from './pages/TermsAndConditions/Terms'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import Profile from './pages/ProfilePage/Profile'
import Navbar from './components/Navbar/Navbar'
import { ModeToggle } from './components/ThemeToggleButton/ToggleButton'
import { Footer } from './components/Footer/Footer'
import Logo from "./utils/Logo"
import AboutPage from './pages/AboutPage/AboutPage'

// import Carousel from './components/Slider/Carousel'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/gigs" element= {<Gigs/>}/>
        <Route path="/add" element={<AddGig/>}/>
        <Route path="/gigs" element={<Gigs/>}/>
        <Route path= "/myGigs" element= {<MyGigs />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/gig/:id" element={<Gig/>}/>
        <Route path="/gigs" element={<Gigs/>}/>
        <Route path="/pay/:id" element={<Pay/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/message/:id' element={<Message/>}/>
        <Route path='/messages' element={<Messages/>}/> 
        <Route path='profile' element={<Profile/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='exp' element={<Logo/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
