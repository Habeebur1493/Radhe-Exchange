import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you use react-router for navigation

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
        {
          title: "Women's Premier League",
          subItems: ["Women's Premier League", "Up Warriorz W v Mumbai Indians W", "Gujarat Giants W v Delhi Capitals W" ],
        },
        {
            title: "International T20 Masters League",
            subItems: ["Sri Lanka Masters v West Indies Masters", "India Masters v Australia Masters"],
        }
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
        {
          title: "League 2",
          subItems: ["Match 3", "Match 4"],
        },
      ],
    },
    {
      key: "tennis",
      label: "Tennis",
      items: [
        {
          title: "Grand Slam",
          subItems: ["Final Match", "Semi Final"],
        },
        {
          title: "ATP Finals",
          subItems: ["Quarter Final", "Round of 16"],
        },
      ],
    },
    {
        key: "Horse",
        label: "Horse",
        items: [
          {
            title: "Grand Prix",
            subItems: ["Final Match", "Semi Final"],
          },
          {
            title: "ATP Finals",
            subItems: ["Quarter Final", "Round of 16"],
          },
        ],
    },
    {
        key: "Greyhound",
        label: "Greyhound",
        items: [
            {
              title: "Grand Prix",
              subItems: ["Final Match", "Semi Final"],
            },
            {
              title: "ATP Finals",
              subItems: ["Quarter Final", "Round of 16"],
            },
          ],
      },
  ];

  
  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-64 mt-14 bg-[--tertiary-background] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-2 p-2">
          {menuItems.map(({ key, label, items }) => (
            <li key={key} className="cursor-pointer">
              {/* Main Category */}
              <div
                className="flex justify-between items-center w-full p-2 hover:bg-[#5dcbde] transition-all border-b border-gray-500"
                onClick={() => toggleDropdown(key)}
              >
                {label}{" "}
                <i
                  className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}
                ></i>
              </div>

              {/* First-level Dropdown */}
              <ul
                className={`overflow-hidden bg-[#d2dcf7] text-black transition-all duration-300 ${
                  dropdowns[key] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {items.map(({ title, subItems }, index) => (
                  <li key={index} className="pl-6 pr-2 py-2">
                    {/* Square Plus/Minus Icon */}
                    <button
                      onClick={() => toggleNestedDropdown(title)}
                      className="mr-2"
                    >
                      <i
                        className={`fa-solid fa-${
                          nestedDropdowns[title] ? "square-minus" : "square-plus"
                        } text-lg`}
                      ></i>
                    </button>
                    {title}

                    {/* Nested Dropdown */}
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        nestedDropdowns[title] ? "max-h-40 opacity-100 pl-6" : "max-h-0 opacity-0"
                      }`}
                    >
                      {subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="text-gray-400 hover:text-white py-1 flex items-center">
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
