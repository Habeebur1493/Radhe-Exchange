import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[--primary-background] text-white flex justify-between items-center p-4 shadow-md ">
        <div className="flex items-center space-x-3">
          {/* Menu Icon */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
            <Menu size={28} />
          </button>
          <h1 className="text-xl font-bold">RADHE EXCHANGE</h1>
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#" className="">Dashboard</a></li>
          <li><a href="#" className="">Clients</a></li>
          <li><a href="#" className="">Sport Analysis</a></li>
          <li><a href="#" className="">Casino Analysis</a></li>

          {/* Dropdown Menus */}
          {["Settlement", "Reports", "Cutting", "Control"].map((item) => (
            <li key={item} className="relative group">
              <a href="#" className="flex items-center space-x-1 hover:underline">
                <span>{item}</span>
                <ChevronDown size={14} />
              </a>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-md hidden group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Option 3</a>
              </div>
            </li>
          ))}
        </ul>

        <ul className="hidden md:flex space-x-6 text-sm font-medium">
      {/* Dashboard Dropdown (Click to Open) */}
      <li className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-1 focus:outline-none"
        >
          <span>Dashboard</span>
          <ChevronDown size={14} />
        </button>

        {/* Dropdown Menu - Shows on Click */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-md">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Change Password</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Log Out</a>
          </div>
        )}
      </li>
    </ul>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="bg-white shadow-lg w-60 h-full overflow-x-hidden  p-2 absolute top-[68px] left-0">
          <ul className="space-y-3 text-gray-800">
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Dashboard</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Clients</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Sport Analysis</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Casino Analysis</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Settlement</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Reports</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Cutting</a></li>
            <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Control</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
