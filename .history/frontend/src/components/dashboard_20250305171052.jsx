import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import DashContent from "./DashContent";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard w-full bg-[#f0f0f5] overflow-x-hidden">

      {/* Navbar */}
      <Navbar/>
      {/* Header */}
      <Header />
      {/* Dashboard Content */}
      <DashContent />
      <footer className="footer fixed bottom-0 w-full h-8 bg-[--secondary-background] text-white text-center pt-2">
        <marquee behavior="scroll" direction="left" scrollamount="5">
        <i className="ri-megaphone-line"></i>  1️⃣ Welcome To Our Exchange...... 2️⃣ ICC Champions Trophy Cup
          TOURNAMENT WINNER Bet Started In Our Exchange..... 💫💫💫
        </marquee>
      </footer>
    </div>
  );
};

export default Dashboard;
