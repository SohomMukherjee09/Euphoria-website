import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Addproduct from './Pages/Addproduct'
import ListProduct from './Pages/ListProduct'
import './App.css'
const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Dashboard/>} />
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/listproduct' element={<ListProduct/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
