import React from 'react'
import Dashboard from './dashboard'
import { Outlet } from 'react-router-dom'

const Client = () => {
  return (
    <div>
        <Dashboard />
        <h1>Client</h1>
    <Outlet />
    </div>
  )
}

export default Client