import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Ensure this is the correct import

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-button")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <div className="relative">
      {/* Left Section: Logo & Menu Button */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white menu-button"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-lg font-bold">RADHE EXCHANGE</h1>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar bg-[--tertiary-background] shadow-lg w-60 h-full absolute top-[56px] left-0 p-2 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
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
    </div>
  );
};

export default Sidebar;
