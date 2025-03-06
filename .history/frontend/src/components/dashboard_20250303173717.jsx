import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="dashboard min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[--primary-background] text-white flex items-center h-14 px-4 shadow-md">
        {/* Left Section: Logo & Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-bold">RADHE EXCHANGE</h1>
        </div>

        {/* Navbar Links (Now Closer to H1) */}
        <div className="ml-6 flex items-center">
          <ul className="hidden md:flex space-x-3">
            {["Dashboard", "Clients", "Sport Analysis", "Casino Analysis"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out"
                  >
                    {item}
                  </a>
                </li>
              )
            )}

            {/* Dropdown Menus */}
            {["Settlement"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-1 w-40 bg-[#18b0c7] text-gray-800 opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 ease-in-out">
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 3
                  </a>
                </div>
              </li>
            ))}
            {/* Dropdown Menus */}
            {[ "Reports"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-1 w-40 bg-[#18b0c7] text-gray-800 opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 ease-in-out">
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 3
                  </a>
                </div>
              </li>
            ))}
             {/* Dropdown Menus */}
             {[ "Cutting"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-1 w-40 bg-[#18b0c7] text-gray-800 opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 ease-in-out">
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 3
                  </a>
                </div>
              </li>
            ))}
            {/* Dropdown Menus */}
            {[ "Control"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-1 w-40 bg-[#18b0c7] text-gray-800 opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-200 ease-in-out">
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-opacity-50">
                    Option 3
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Move Dashboard Dropdown to the Right */}
        <div className="ml-auto">
          <ul className="hidden md:flex text-sm font-medium">
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 focus:outline-none px-4 h-14"
              >
                <span>Dashboard</span>
                <ChevronDown size={14} />
              </button>

              {/* Dropdown Menu - Shows on Click */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white text-gray-800 shadow-md rounded-md">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Change Password
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Log Out
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="bg-white shadow-lg w-60 h-full absolute top-[56px] left-0 p-2">
          <ul className="space-y-2 text-gray-800">
            {[
              "Dashboard",
              "Clients",
              "Sport Analysis",
              "Casino Analysis",
              "Settlement",
              "Reports",
              "Cutting",
              "Control",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block hover:bg-gray-200 p-2 rounded transition-all duration-200 ease-in-out"
                >
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
