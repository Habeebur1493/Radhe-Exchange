import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import DashContent from "./DashContent";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard w-full bg-[#f0f0f5] overflow-x-hidden">

      {/* Navbar */}
      <nav className="bg-[--primary-background] text-white flex items-center lg:h-14 h-10  px-4 shadow-md z-10  ">
        <Sidebar />
        <img className="lg:h-10 h-8 " src="src/images/logo.png" alt="" />
        {/* Navbar Links (Now Closer to H1) */}
        <div className="ml-16 flex items-center">
      <ul className="hidden md:flex space-x-3">
        {[
          { name: "Dashboard", path: "/dashboard" },
          { name: "Clients", path: "/clients" },
          { name: "Sport Analysis", path: "/sport-analysis" },
          { name: "Casino Analysis", path: "/casino-analysis" },
        ].map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Dropdown Menus */}
        {[
          {
            name: "Settlement",
            subItems: [
              { name: "User", path: "/settlement/user" },
              { name: "Master", path: "/settlement/master" },
            ],
          },
          {
            name: "Reports",
            subItems: [
              { name: "User Detail", path: "/reports/user-detail" },
              { name: "Account Statement", path: "/reports/account-statement" },
              { name: "Settlement/Balance Report", path: "/reports/balance-report" },
            ],
          },
          {
            name: "Cutting",
            subItems: [
              { name: "Agent Master", path: "/cutting/agent-master" },
              { name: "Cutting History", path: "/cutting/history" },
            ],
          },
          {
            name: "Control",
            subItems: [
              { name: "Game", path: "/control/game" },
              { name: "Casino", path: "/control/casino" },
            ],
          },
        ].map((dropdown) => (
          <li key={dropdown.name} className="relative group lg:block hidden">
            <button className="h-14 flex items-center px-1 hover:bg-[#18b0c7] transition-all duration-200 ease-in-out">
              {dropdown.name}
              <ChevronDown size={14} className="ml-1" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-40 bg-[#16a2ba] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
              {dropdown.subItems.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className="block px-4 py-2 hover:bg-[#107a8d] border-b border-gray-500"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>

        {/* Move Dashboard Dropdown to the Right */}
        <div className="ml-auto">
          <ul className=" md:flex text-sm font-medium">
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-1 focus:outline-none px-4 h-14 text-[12px] lg:text-[16px]"
              >
                <span>User</span>
                <ChevronDown size={14} />
              </button>

              {/* Dropdown Menu - Shows on Click */}
              {isDropdownOpen && (
                <div className="absolute h-20 top-12 right-5 w-42 bg-white shadow-lg text-gray-800 rounded-sm z-10">
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
      <header className="bg-[#007182] z-10">
        {/* Dropdown Toggle */}
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`ri-arrow-down-circle-fill text-white lg:text-[30px] text-[20px]  transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="bg-[#007182] transition-all duration-300 pb-1 px-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:flex lg:justify-evenly items-center text-white text-[10px] sm:text-[12px] lg:text-[14px] w-full mr-4">
              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  User ID: <span className="ml-2">776demo</span>
                </h4>
                <h4 className="flex justify-between">
                  User Type: <span className="ml-2">Admin</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  Given Bal:{" "}
                  <span className="text-[#20fa5e] ml-2">1000.00</span>
                </h4>
                <h4 className="flex justify-between">
                  Available: <span className="text-[#20fa5e] ml-2">500.00</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  Up Line: <span className="lg:ml-6">0</span>
                </h4>
                <h4 className="flex justify-between">
                  Down Line: <span className="lg:ml-2">0</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  Current P&L: <span className="lg:ml-2">0</span>
                </h4>
                <h4 className="flex justify-between">
                  Exposure: <span className="lg:ml-8">0</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto lg:mb-7 lg:pl-10">
                <h4 className="flex justify-between">
                  My P&L: <span className="lg:ml-10">0</span>
                </h4>
              </div>
            </div>
          </div>
        )}
      </header>
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
