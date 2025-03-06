import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="dashboard w-full bg-[#f0f0f5] overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* Dashboard */}
      <Dashboard />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
