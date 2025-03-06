import React from "react";
import { useState } from "react";

const navItems = [
  { key: "Dashboard", label: "Dashboard" },
  { key: "Clients", label: "Clients" },
  { key: "Sport Analysis", label: "Sport Analysis" },
  { key: "Casino Analysis", label: "Casino Analysis" },
  {
    key: "Settlement",
    label: "Settlement",
    items: ["User", "Master"], // Directly an array of sub-items
  },
];

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle only the clicked dropdown
    }));
  };

  return (
    <ul className="p-2 lg:hidden">
      {navItems.map(({ key, label, items }, index) => (
        <li key={key} className="cursor-pointer text-[12px] ">
          {/* Main Category */}
          <div
            className="flex justify-between items-center w-full p-2 hover:bg-[#5dcbde] transition-all border-b border-[#18b0c7]"
            onClick={() => toggleDropdown(key)}
          >
            {label}{" "}
            {items && ( // Show the arrow icon only if it has sub-items
              <i
                className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}
              ></i>
            )}
          </div>

          {/* First-level Dropdown (Show Only for Settlement) */}
          {items && (
            <ul
              className={`overflow-hidden text-white transition-all duration-300 ${
                dropdowns[key] ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              } `}
            >
              {items.map((title, idx) => (
                <li key={idx} className="pl-6 pr-2 py-2">
                  {title}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
