import React from 'react'
import './App.css'
import { Navigate, Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <div >

      <Routes>
        <Route path="/" element= Home />
      </Routes>

    </div>
  )
}

export default App