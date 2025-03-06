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
        className={`sidebar fixed top-0 left-0 h-full w-64 mt-14 bg-[--tertiary-background] text-white  transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-2">
          {[
            { key: "cricket", label: "Cricket", items: ["Match 1", "Match 2"] },
            { key: "soccer", label: "Soccer", items: ["League 1", "League 2"] },
            { key: "tennis", label: "Tennis", items: ["Grand Slam", "ATP Finals"] },
            { key: "greyhound", label: "Greyhound", items: ["Race 1", "Race 2"] },
          ].map(({ key, label, items }) => (
            <li key={key} className="cursor-pointer">
              <div
                className="flex justify-between items-center w-full p-2 hover:bg-[#5dcbde] transition-all border-b border-gray-500"
                onClick={() => toggleDropdown(key)}
              >
                {label} <i className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}></i>
              </div>
              {dropdowns[key] && (
                <ul className="pl-4 mt-2 space-y-1 text-gray-300">
                  {items.map((item, index) => (
                    <li key={index} className="hover:text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
