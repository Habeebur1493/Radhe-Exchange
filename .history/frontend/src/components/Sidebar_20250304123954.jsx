import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    cricket: false,
    soccer: false,
    tennis: false,
    greyhound: false,
  });

  const toggleDropdown = (category) => {
    setDropdowns((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-64 mt-14 bg-[--tertiary-background] text-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-2 ">
          {/* Cricket */}
          <li className="cursor-pointer">
            <div className="flex justify-between items-center" onClick={() => toggleDropdown("cricket")}>
              Cricket <i className={`fa-solid fa-caret-${dropdowns.cricket ? "up" : "down"}`}></i>
            </div>
            {dropdowns.cricket && (
              <ul className="pl-4 mt-2 space-y-1 text-gray-300 hover:bg-[#5dcbde]">
                <li>Match 1</li>
                <li>Match 2</li>
              </ul>
            )}
          </li>

          {/* Soccer */}
          <li className="cursor-pointer">
            <div className="flex justify-between items-center" onClick={() => toggleDropdown("soccer")}>
              Soccer <i className={`fa-solid fa-caret-${dropdowns.soccer ? "up" : "down"}`}></i>
            </div>
            {dropdowns.soccer && (
              <ul className="pl-4 mt-2 space-y-1 text-gray-300">
                <li>League 1</li>
                <li>League 2</li>
              </ul>
            )}
          </li>

          {/* Tennis */}
          <li className="cursor-pointer">
            <div className="flex justify-between items-center" onClick={() => toggleDropdown("tennis")}>
              Tennis <i className={`fa-solid fa-caret-${dropdowns.tennis ? "up" : "down"}`}></i>
            </div>
            {dropdowns.tennis && (
              <ul className="pl-4 mt-2 space-y-1 text-gray-300">
                <li>Grand Slam</li>
                <li>ATP Finals</li>
              </ul>
            )}
          </li>

          {/* Greyhound */}
          <li className="cursor-pointer">
            <div className="flex justify-between items-center" onClick={() => toggleDropdown("greyhound")}>
              Greyhound <i className={`fa-solid fa-caret-${dropdowns.greyhound ? "up" : "down"}`}></i>
            </div>
            {dropdowns.greyhound && (
              <ul className="pl-4 mt-2 space-y-1 text-gray-300">
                <li>Race 1</li>
                <li>Race 2</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
