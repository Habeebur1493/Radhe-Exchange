import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import DashContent from "./DashContent";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard min-h-screen bg-gray-200 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[--primary-background] text-white flex items-center justify-between h-14 px-4 shadow-md">
        {/* Sidebar Toggle Button for Mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <ChevronDown size={20} />
        </button>
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <h1 className="text-xl font-semibold">RADHE EXCHANGE</h1>
        {/* Navbar Links */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-3">
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
            {/* Dropdowns */}
            {/* Repeat for other dropdown menus */}
            <DropdownMenu title="Settlement" />
            <DropdownMenu title="Reports" />
            <DropdownMenu title="Cutting" />
            <DropdownMenu title="Control" />
          </ul>
        </div>
        {/* Dropdown for User (Mobile Friendly) */}
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
              {isDropdownOpen && (
                <div className="absolute h-20 right-5 w-42 bg-white text-gray-800 rounded-sm">
                  <a href="#" className="block px-4 py-2 hover:bg-[#5dcbde]">
                    Change Password
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-[#5dcbde]">
                    Log Out
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-[#007182] p-1">
        {/* Dropdown Toggle for Details */}
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`ri-arrow-down-circle-fill text-white text-[30px] transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="bg-[#007182] transition-all duration-300 pb-1 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white text-[14px]">
              <div className="flex flex-col text-center gap-2">
                <h4 className="flex justify-between">
                  User ID: <span className="ml-2">776demo</span>
                </h4>
                <h4 className="flex justify-between">
                  User Type: <span className="ml-2">Admin</span>
                </h4>
              </div>
              <div className="flex flex-col text-center gap-2">
                <h4 className="flex justify-evenly">
                  Given Bal:{" "}
                  <span className="text-[#20fa5e] ml-2">1000.00</span>
                </h4>
                <h4 className="flex justify-evenly">
                  Available: <span className="text-[#20fa5e] ml-2">500.00</span>
                </h4>
              </div>
              <div className="flex flex-col text-center gap-2">
                <h4 className="flex justify-evenly">
                  Up Line: <span className="ml-6">0</span>
                </h4>
                <h4 className="flex justify-evenly">
                  Down Line: <span className="ml-2">0</span>
                </h4>
              </div>
              <div className="flex flex-col text-center gap-2 mb-7">
                <h4 className="flex justify-evenly">
                  Current P&L: <span className="ml-2">0</span>
                </h4>
                <h4 className="flex justify-evenly">
                  Exposure: <span className="ml-8">0</span>
                </h4>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <DashContent />
    </div>
  );
};

// Dropdown Menu Component
const DropdownMenu = ({ title }) => {
  return (
    <li key={title} className="relative group">
      <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
        {title}
        <ChevronDown size={14} className="ml-1" />
      </button>
      <div className="absolute left-0 mt-0 w-40 bg-[#16a2ba] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
        {/* Example Submenu Items */}
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
  );
};

export default Dashboard;
