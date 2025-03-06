import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[--primary-background] text-white flex justify-between items-center h-16 px-6 shadow-md">
        <div className="flex items-center space-x-3">
          {/* Menu Icon */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
            <Menu size={28} />
          </button>
          <h1 className="text-xl font-bold">RADHE EXCHANGE</h1>
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex gap-4">
          {["Dashboard", "Clients", "Sport Analysis", "Casino Analysis"].map((item) => (
            <li key={item} className="relative">
              <a
                href="#"
                className="h-16 flex items-center px-6 hover:bg-[#18b0c7] transition-all duration-300 ease-in-out"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Dropdown Menus (Settlement, Reports, Cutting, Control) */}
          {["Settlement", "Reports", "Cutting", "Control"].map((item) => (
            <li key={item} className="relative group">
              <a
                href="#"
                className="h-16 flex items-center px-6 hover:bg-[#18b0c7] transition-all duration-300 ease-in-out"
              >
                <span>{item}</span>
                <ChevronDown size={14} className="ml-1" />
              </a>

              {/* Dropdown */}
              <div className="absolute left-0 mt-0 w-40 bg-[#18b0c7] text-gray-800 shadow-lg hidden group-hover:block transition-all duration-300 ease-in-out">
                <a href="#" className="block px-4 py-2 hover:bg-opacity-50">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-opacity-50">Option 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-opacity-50">Option 3</a>
              </div>
            </li>
          ))}
        </ul>

        {/* Dashboard Dropdown (Click to Open) */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 focus:outline-none px-6 h-16"
            >
              <span>Dashboard</span>
              <ChevronDown size={14} />
            </button>

            {/* Dropdown Menu - Shows on Click */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-0 w-40 bg-white text-gray-800 shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Change Password</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Log Out</a>
              </div>
            )}
          </li>
        </ul>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="bg-white shadow-lg w-60 h-full absolute top-[64px] left-0 p-2">
          <ul className="space-y-3 text-gray-800">
            {["Dashboard", "Clients", "Sport Analysis", "Casino Analysis", "Settlement", "Reports", "Cutting", "Control"].map((item) => (
              <li key={item}>
                <a href="#" className="block hover:bg-gray-200 p-2 rounded transition-all duration-300 ease-in-out">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
