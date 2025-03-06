import React, { useState } from "react";

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

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 mt-14 bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-2 p-2">
          {[
            { key: "cricket", label: "Cricket", items: ["ICC Champions Trophy", "Match 2"] },
            { key: "soccer", label: "Soccer", items: ["League 1", "League 2"] },
            { key: "tennis", label: "Tennis", items: ["Grand Slam", "ATP Finals"] },
            { key: "greyhound", label: "Greyhound", items: ["Race 1", "Race 2"] },
          ].map(({ key, label, items }) => (
            <li key={key} className="cursor-pointer">
              {/* Main Category */}
              <div
                className="flex justify-between items-center w-full p-2 hover:bg-[#5dcbde] transition-all border-b border-gray-500"
                onClick={() => toggleDropdown(key)}
              >
                {label} <i className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}></i>
              </div>

              {/* First-level Dropdown */}
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  dropdowns[key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {items.map((item, index) => (
                  <li key={index} className="flex items-center pl-6 pr-2 py-2 text-gray-300 hover:text-white">
                    {/* Square Plus/Minus Icon */}
                    <button onClick={() => toggleNestedDropdown(item)} className="mr-2">
                      <i
                        className={`fa-solid fa-${
                          nestedDropdowns[item] ? "square-minus" : "square-plus"
                        } text-lg`}
                      ></i>
                    </button>
                    {item}
                  </li>
                ))}

                {/* Nested Dropdown Example */}
                {items.map((item, index) => (
                  <ul
                    key={`nested-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      nestedDropdowns[item] ? "max-h-40 opacity-100 pl-10" : "max-h-0 opacity-0"
                    }`}
                  >
                    <li className="text-gray-400 hover:text-white py-1">Sub-item 1</li>
                    <li className="text-gray-400 hover:text-white py-1">Sub-item 2</li>
                  </ul>
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
