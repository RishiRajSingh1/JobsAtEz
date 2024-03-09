import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import './App.css'
import Register from './pages/register/Register'
import { QueryClient, QueryClientProvider } from 'react-query';
import AddGig from './pages/AddGig/AddGig'

// import Carousel from './components/Slider/Carousel'

function App() {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/gigs" element= {<></>}/>
        <Route path="/addGig" element={<AddGig/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </QueryClientProvider>
    </>
  )
}

export default App
