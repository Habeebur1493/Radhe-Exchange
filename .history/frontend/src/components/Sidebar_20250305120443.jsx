import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const [nestedDropdowns, setNestedDropdowns] = useState({});

  const toggleDropdown = (category) => {
    setDropdowns((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const toggleNestedDropdown = (item) => {
    setNestedDropdowns((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const menuItems = [
    {
      key: "cricket",
      label: "Cricket",
      items: [
        {
          title: "ICC Champions Trophy",
          subItems: ["India v Australia", "England v South Africa", "South Africa v New Zealand"],
        },
      ],
    },
    {
      key: "soccer",
      label: "Soccer",
      items: [
        {
          title: "League 1",
          subItems: ["Team A v Team B", "Team C v Team D"],
        },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Menu Icon (Hidden on large screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[12px] lg:text-xl md:hidden"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar (Visible by default on large screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-50 lg:w-64 md:w-80 mt-14 bg-[--tertiary-background] text-white transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 lg:translate-x-0`}
      >
        <ul className="p-2 text-[12px] lg:text-[16px]">
          {menuItems.map(({ key, label, items }) => (
            <li key={key} className="cursor-pointer">
              {/* Main Category */}
              <div
                className="flex justify-between items-center w-full p-2 hover:bg-[#5dcbde] transition-all border-b border-[#18b0c7]"
                onClick={() => toggleDropdown(key)}
              >
                {label}
                <i className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}></i>
              </div>

              {/* First-level Dropdown */}
              <ul
                className={`overflow-hidden text-[11px] bg-[#d2dcf7] text-black transition-all duration-300 ${
                  dropdowns[key] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {items.map(({ title, subItems }, index) => (
                  <li key={index} className="pl-6 pr-2 py-2">
                    {/* Square Plus/Minus Icon */}
                    <button onClick={() => toggleNestedDropdown(title)} className="mr-2">
                      <i className={`fa-solid fa-${nestedDropdowns[title] ? "square-minus" : "square-plus"} text-lg`}></i>
                    </button>
                    {title}

                    {/* Nested Dropdown */}
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        nestedDropdowns[title] ? "max-h-[1000px] opacity-100 pl-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      {subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-black py-1 flex items-center">
                          <i className="fa-solid fa-square-xmark mr-2"></i>
                          <Link to={`/${key}/${title}/${subItem}`} className="cursor-pointer">
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
