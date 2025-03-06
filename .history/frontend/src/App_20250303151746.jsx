import React from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'


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