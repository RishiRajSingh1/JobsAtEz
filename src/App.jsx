import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import './App.css'
import Register from './pages/register/Register'
// import Carousel from './components/Slider/Carousel'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FindWork" element={<div>Home</div>}/>
        <Route path="/FindFreelancer" element={<div>Home</div>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
