import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";


const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard w-full bg-[#f0f0f5] overflow-x-hidden">

      {/* Navbar */}
      <Navbar/>
      {/* Header */}
      <Header />
      {/* Dashboard */}
      <Dashboard />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
