import React from 'react'
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


const Navbar = () => {
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <nav className="bg-[--primary-background] text-white flex items-center lg:h-14 h-10  px-4 shadow-md z-10  ">
        <Sidebar />
        <img className="lg:h-10 h-8 " src="src/images/logo.png" alt="" />
        {/* Navbar Links (Now Closer to H1) */}
        <div className="ml-16 flex items-center">
      <ul className="hidden md:flex space-x-3">
        {[
          { name: "Dashboard", path: "/dashboard" },
          { name: "Client", path: "/client" },
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
  )
}

export default Navbar