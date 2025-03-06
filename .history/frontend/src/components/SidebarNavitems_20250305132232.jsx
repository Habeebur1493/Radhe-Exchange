import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { key: "Dashboard", label: "Dashboard", path: "/dashboard" },
  { key: "Clients", label: "Clients", path: "/clients" },
  { key: "SportAnalysis", label: "Sport Analysis", path: "/sport-analysis" },
  { key: "CasinoAnalysis", label: "Casino Analysis", path: "/casino-analysis" },
  {
    key: "Settlement",
    label: "Settlement",
    items: [
      { title: "User", path: "/settlement/user" },
      { title: "Master", path: "/settlement/master" },
    ],
  },
];

const Sidebar = () => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <ul className="p-2 lg:hidden ">
      {navItems.map(({ key, label, path, items }) => (
        <li key={key} className="cursor-pointer text-[12px] hover:bg-[#5dcbde] transition-all">
          <div
            className="flex justify-between items-center w-full p-2 border-b border-[#18b0c7] "
            onClick={() => items && toggleDropdown(key)}
          >
            {items ? (
              <>
                {label}{" "}
                <i
                  className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}
                ></i>
              </>
            ) : (
              <Link to={path} className="w-full block">
                {label}
              </Link>
            )}
          </div>

          {items && (
            <ul
              className={`overflow-hidden text-white transition-all duration-300 ${
                dropdowns[key] ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {items.map(({ title, path }, idx) => (
                <li
                  key={idx}
                  className="pl-6 pr-2 py-2 border-b border-[#18b0c7] hover:bg-[#5dcbde] transition-all"
                >
                  <Link to={path} className="w-full block">{title}</Link>
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
