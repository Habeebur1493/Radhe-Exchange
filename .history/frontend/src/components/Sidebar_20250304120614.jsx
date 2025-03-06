import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="relative flex items-center space-x-3">
      {/* Menu Button */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white menu-button">
        <Menu size={24} />
      </button>
      
      {/* App Title */}
      <h1 className="text-lg font-bold text-white">RADHE EXCHANGE</h1>

      {/* Sidebar */}
      <div
        className={`sidebar bg-[#005f73] shadow-lg w-60 h-full absolute top-14 left-0 p-2 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="space-y-2 text-white">
          {["Dashboard", "Clients", "Sport Analysis", "Casino Analysis", "Settlement", "Reports", "Cutting", "Control"].map(
            (item) => (
              <li key={item}>
                <a href="#" className="block hover:bg-[#18b0c7] p-2 rounded transition-all duration-200 ease-in-out">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
