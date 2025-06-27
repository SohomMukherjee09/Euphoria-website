import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Componnts/Menu'
function App() {

  return (
    <>
      <BrowserRouter>

        <Menu/>


        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
