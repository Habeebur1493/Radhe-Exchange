import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* This is where child routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default Layout;
