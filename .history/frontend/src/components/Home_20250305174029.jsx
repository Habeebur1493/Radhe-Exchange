import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import Dashboard from "./dashboard";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
