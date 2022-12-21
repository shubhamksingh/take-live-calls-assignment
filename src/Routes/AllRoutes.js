import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
   </Routes>
  )
}

export default AllRoutes