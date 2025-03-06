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
          subItems: ["Women's Premier League", "Up Warriorz W v Mumbai Indians W", "Gujarat Giants W v Delhi Capitals W"],
        },
        {
          title: "International T20 Masters League",
          subItems: ["Sri Lanka Masters v West Indies Masters", "India Masters v Australia Masters"],
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

      
    </div>
  );
};

export default Sidebar;
