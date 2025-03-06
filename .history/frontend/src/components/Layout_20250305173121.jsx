import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


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