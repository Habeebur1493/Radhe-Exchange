import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import DashContent from "./DashContent";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard min-h-screen bg-gray-200 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-[--primary-background] text-white flex items-center h-14 px-4 shadow-md lg:w-full ">
  <Sidebar />
  <h1 className="text-[10px] lg:text-[16px]">RADHE EXCHANGE</h1>
  {/* Navbar Links (Now Closer to H1) */}
  <div className="ml-6 flex items-center">
    <ul className="hidden lg:block md:flex space-x-3">
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
        <li key={item} className="relative group lg:block hidden">
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
        <li key={item} className="relative group lg:block hidden">
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
            {/* More Report Links */}
          </div>
        </li>
      ))}
      {/* Dropdown Menus */}
      {["Cutting"].map((item) => (
        <li key={item} className="relative group lg:block hidden">
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
        <li key={item} className="relative group lg:block hidden">
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
    <ul className="hidden lg:block md:flex text-sm font-medium">
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
          <div className=" h-20 right-5 w-42 bg-white text-gray-800  rounded-sm">
            <a href="#" className="block px-4 py-2 hover:bg-[#5dcbde]">
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>{" "}
              Change Password
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-[#5dcbde]">
              <span>
                <i className="fa-solid fa-arrow-right-long"></i>
              </span>{" "}
              Log Out
            </a>
          </div>
        )}
      </li>
    </ul>
  </div>
</nav>


      {/* Header */}
      <header className="bg-[#007182] p-1  ">
        {/* Dropdown Toggle */}
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
            <div className="flex justify-evenly items-center text-white text-[14px] w-full mr-4">
              <div className="flex flex-col text-center gap-2  ">
                <h4 className="flex justify-between">
                  User ID: <span className="ml-2">776demo</span>
                </h4>
                <h4 className="flex justify-between">
                  User Type: <span className="ml-2">Admin</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-1/5">
                <h4 className="flex justify-evenly">
                  Given Bal:{" "}
                  <span className="text-[#20fa5e] ml-2">1000.00</span>
                </h4>
                <h4 className="flex justify-evenly">
                  Available: <span className="text-[#20fa5e] ml-2">500.00</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-1/5">
                <h4 className="flex justify-evenly">
                  Up Line: <span className="ml-6">0</span>
                </h4>
                <h4 className="flex justify-evenly">
                  Down Line: <span className="ml-2">0</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-1/5">
                <h4 className="flex justify-evenly">
                  Current P&L: <span className="ml-2">0</span>
                </h4>
                <h4 className="flex justify-evenly">
                  Exposure: <span className="ml-8">0</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-1/5 mb-7 pl-10">
                <h4 className="flex justify-evenly">
                  My P&L: <span className="ml-10">0</span>
                </h4>
              </div>
            </div>
          </div>
        )}
      </header>
      <DashContent />
    </div>
  );
};

export default Dashboard;
