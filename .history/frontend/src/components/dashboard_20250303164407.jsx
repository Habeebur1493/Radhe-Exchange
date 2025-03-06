import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-3">
          {/* Menu Icon */}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
            <Menu size={28} />
          </button>
          <h1 className="text-xl font-bold">RADHE EXCHANGE</h1>
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#" className="hover:underline">Dashboard</a></li>
          <li><a href="#" className="hover:underline">Clients</a></li>
          <li><a href="#" className="hover:underline">Sport Analysis</a></li>
          <li><a href="#" className="hover:underline">Casino Analysis</a></li>

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

        {/* Dropdown Select */}
        <select className="bg-white text-gray-700 p-2 rounded-md">
          <option value="changepassword">Change Password</option>
          <option value="logout">Logout</option>
        </select>
      </nav>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="bg-white shadow-lg w-60 p-4 absolute top-[70px] left-0">
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
