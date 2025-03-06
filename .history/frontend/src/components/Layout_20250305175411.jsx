import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/client">Client</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
      
      {/* This is where child routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default Layout;
