import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
// import Carousel from './components/Slider/Carousel'

function App() {

  return (
    <>
    <Router>
      <Home/>
      <Routes>
        <Route path="/Home" element={<div>Home</div>}/>
        <Route path="/FindWork" element={<div>Home</div>}/>
        <Route path="/FindFreelancer" element={<div>Home</div>}/>
        <Route path="/login" element={<div>Home</div>}/>
        <Route path="/signup" element={<div>Home</div>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
