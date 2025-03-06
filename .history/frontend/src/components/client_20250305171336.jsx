import React from 'react'
import Dashboard from './dashboard'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Client = () => {
  return (
    <div>
       <Navbar/>
       
        <h1>Client</h1>
    <Outlet />
    </div>
  )
}

export default Client