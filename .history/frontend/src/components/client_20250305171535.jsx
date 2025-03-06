import React from 'react'
import Dashboard from './dashboard'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

const Client = () => {
  return (
    <div>
       {/* Navbar */}
      <Navbar/>
      {/* Header */}
      <Header />
      <div>
    
      </div>
      <Footer />
    </div>
  )
}

export default Client