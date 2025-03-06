import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

                {/* Dropdown - Show on Hover but only inside the navbar */}
                <div className="absolute left-0 mt-0 w-40 bg-[#16a2ba] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d] border-b border-gray-500"
                  >
                    User
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#107a8d]">
                    Master
                  </a>
                </div>
              </li>
            ))}
            {/* Dropdown Menus */}
            {["Reports"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-0 w-40 bg-[#16a2ba] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d] border-b-1 border-gray-500"
                  >
                    User Detail
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d] border-b-1 border-gray-500"
                  >
                    Account Satatement
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Settlement/Balance Report
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Transaction Report
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Current Bets
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Profit & Loss Report
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Event Profit & Loss Report
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Bet History
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Live Bets
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d] border-b-1 border-gray-500"
                  >
                    Sports Revenue
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-opacity-50  border-b-1 border-gray-500"
                  >
                    IP lookup
                  </a>
                </div>
              </li>
            ))}
            {/* Dropdown Menus */}
            {["Cutting"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-0 w-40 bg-[#16a2ba] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Agent Master
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#107a8d]">
                    Cutting History
                  </a>
                </div>
              </li>
            ))}
            {/* Dropdown Menus */}
            {["Control"].map((item) => (
              <li key={item} className="relative group">
                <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
                  {item}
                  <ChevronDown size={14} className="ml-1" />
                </button>

                {/* Dropdown - Show on Hover */}
                <div className="absolute left-0 mt-0 w-40 bg-[#16a2ba] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-[#107a8d]  border-b-1 border-gray-500"
                  >
                    Game
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#107a8d]">
                    Casino
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
                <div className="absolute h-20 right-5 w-40 bg-white text-gray-800 shadow-md rounded-md">
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

      {/* Header */}
      <header className="bg-[#007182] p-2  ">
        {/* Dropdown Toggle */}
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`fa-solid fa-angle-down bg-white text-black font-bold rounded-full p-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="bg-[#007182] transition-all duration-300 p-3">
          <div className="flex justify-between items-center text-white text-[14px] ml-2">
            
            <div className="flex flex-col text-center gap-2">
              <h4 className="flex">User ID: <span className="ml-1">776demo</span></h4>
              <h4 className="flex">User Type: <span className="ml-1">Admin</span></h4>
            </div>
        
            <div className="flex flex-col text-center gap-2">
              <h4 className="flex">Given Bal: <span className="text-[#20fa5e] ml-15">1000.00</span></h4>
              <h4 className="flex">Available: <span className="text-[#20fa5e] ml-20">500.00</span></h4>
            </div>
        
            <div className="flex flex-col text-center gap-2">
              <h4 className="flex">Up Line: <span className="ml-1">0</span></h4>
              <h4 className="flex">Down Line: <span className="ml-1">0</span></h4>
            </div>
        
            <div className="flex flex-col text-center gap-2">
              <h4 className="flex">Current P&L: <span className="ml-1">0</span></h4>
              <h4 className="flex">Exposure: <span className="ml-1">0</span></h4>
            </div>
        
            <div className="flex flex-col text-center gap-2 mb-7">
              <h4 className="flex">My P&L: <span className="ml-1">0</span></h4>
            </div>
        
          </div>
        </div>
        
        )}
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="sidebar bg-[--tertiary-background] shadow-lg w-60 h-full absolute top-[56px] left-0 p-2">
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
