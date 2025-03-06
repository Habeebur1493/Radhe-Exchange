import React from 'react'
import Dashboard from './dashboard'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Client = () => {
  return (
    <div>
       {/* Navbar */}
      <Navbar/>
      {/* Header */}
      <Header />
      <div>
      <Outlet />
      </div>
    
    </div>
  )
}

export default Client