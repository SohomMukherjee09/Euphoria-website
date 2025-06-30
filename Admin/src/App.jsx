import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Addproduct from './Pages/Addproduct'
import ListProduct from './Pages/ListProduct'
import Login from './Pages/Login'
import './App.css'
const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Dashboard/>} />
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/listproduct' element={<ListProduct/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
