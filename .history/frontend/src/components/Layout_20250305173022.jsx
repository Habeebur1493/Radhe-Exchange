import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout