import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
// import Carousel from './components/Slider/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Carousel/> */}
   <Navbar/>

   
    </>
  )
}

export default App
