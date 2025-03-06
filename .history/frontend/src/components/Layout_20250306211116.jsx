import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <Outlet /> {/* This ensures the page content appears in the correct place */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
