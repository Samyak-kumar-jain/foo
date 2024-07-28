import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Protected from './Components/Protected'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import { Routes,Route, BrowserRouter } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Protected element = {<Success/>} />}/>
          <Route path="" element = {<Error/>}/>
         
        </Routes>
     </BrowserRouter>
    
  )
}

export default App
