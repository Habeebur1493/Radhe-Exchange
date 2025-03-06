import React from 'react'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
      <Outlet />
    </div>
  )
}

export default Layout