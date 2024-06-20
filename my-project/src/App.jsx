import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import DoctorDetails from './components/DoctorDetails'
import {GoogleGenerativeAI} from '@google/generative-ai'
import Home from './components/Home'



const App = () => {
  
  

  
  return (
    <div className='h-screen'>
      <Navbar/>
      
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/docdetails/:spe' element={<DoctorDetails/>}/>
      </Routes>
    </div>
  )
}

export default App