import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarNavitems from "./SidebarNavitems";

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
      icon: "/images/cricket.png",
      items: [
        {
          title: "ICC Champions Trophy",
          subItems: [
            "India v Australia",
            "England v South Africa",
            "South Africa v New Zealand",
          ],
        },
        {
          title: "Women's Premier League",
          subItems: [
            "Women's Premier League",
            "Up Warriorz W v Mumbai Indians W",
            "Gujarat Giants W v Delhi Capitals W",
          ],
        },
        {
          title: "International T20 Masters League",
          subItems: [
            "Sri Lanka Masters v West Indies Masters",
            "India Masters v Australia Masters",
          ],
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
          subItems: ["Match 1", "Match 2"],
        },
        {
          title: "Championship",
          subItems: ["Match 3", "Match 4"],
        },
      ],
    },
    {
      key: "horse",
      label: "Horse",
      items: [
        {
          title: "Grand Prix",
          subItems: ["Match 1", "Match 2"],
        },
        {
          title: "Championship",
          subItems: ["Match 3", "Match 4"],
        },
      ],
    },
    {
      key: "Greyhound",
      label: "Greyhound",
      items: [
        {
          title: "Grand Prix",
          subItems: ["Match 1", "Match 2"],
        },
        {
          title: "Championship",
          subItems: ["Match 3", "Match 4"],
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
        className={`sidebar fixed top-0 left-0 h-full w-52 pt-14 bg-[--tertiary-background] text-white transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-xl"
        >
          &times;
        </button>

        <SidebarNavitems />

        {/* Sidebar Content */}
        <ul className="pl-2 pr-2 pb-2 pt-0">
          {menuItems.map(({ key, label, items }) => (
            <li key={key} className="cursor-pointer text-[12px] lg:text-[14px]">
              {/* Main Category */}
              <div
                className="flex justify-between items-center w-full p-2 hover:bg-[#5dcbde] transition-all border-b border-[#18b0c7]"
                onClick={() => toggleDropdown(key)}
              >
                <div className="flex items-center">
                  <img src={icon} alt={label} className="w-5 h-5 mr-2" />{" "}
                  {/* Image added */}
                  {label}
                </div>
               
                <i
                  className={`fa-solid fa-caret-${
                    dropdowns[key] ? "up" : "down"
                  }`}
                ></i>
              </div>

              {/* First-level Dropdown */}
              <ul
                className={`overflow-hidden text-[11px] bg-[#d2dcf7] text-black transition-all duration-300 ${
                  dropdowns[key]
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
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
                          nestedDropdowns[title]
                            ? "square-minus"
                            : "square-plus"
                        } text-lg`}
                      ></i>
                    </button>
                    {title}

                    {/* Nested Dropdown */}
                    <ul
                      className={`overflow-hidden transition-all duration-300 ${
                        nestedDropdowns[title]
                          ? "max-h-[1000px] opacity-100 pl-6"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {subItems.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="text-black py-1 flex items-center"
                        >
                          <i className="fa-solid fa-square-xmark mr-2"></i>
                          <Link
                            to={`/${key}/${title}/${subItem}`}
                            className="cursor-pointer"
                          >
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
