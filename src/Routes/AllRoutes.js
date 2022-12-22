import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accepted from '../Pages/Accepted'
import CreateEvent from '../Pages/CreateEvent'
import EventDetail from '../Pages/EventDetail'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MyEvents from '../Pages/MyEvents'
import NotFound from '../Pages/NotFound'
import Pending from '../Pages/Pending'
import Signup from '../Pages/Signup'

const AllRoutes = () => {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/myevents' element={<MyEvents/>} />
        <Route path='/create' element={<CreateEvent/>} />
        <Route path='/events/accepted' element={<Accepted/>} />
        <Route path='/events/pending' element={<Pending/>} />
        <Route path='/event/:id' element={<EventDetail/>} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
   </Routes>
  )
}

export default AllRoutes