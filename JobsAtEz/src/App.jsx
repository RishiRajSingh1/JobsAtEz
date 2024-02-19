import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/Slider/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Carousel/>
   
    </>
  )
}

export default App
