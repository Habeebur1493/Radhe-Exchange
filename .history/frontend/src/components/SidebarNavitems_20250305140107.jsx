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
  {
    key: "Reports",
    label: "Reports",
    items: [
      { title: "UserDetail", path: "/reports/userdetail" },
      {title:"Account Statement", path:"/reports/accountstatement"},
      {title:"Settlement/Balance Report", path:"/reports/settlementbalancereport"},
      {title:"Transaction Report", path:"/reports/transactionreport"},
      {title:"Current Bets", path:"/reports/currentbets"},
      {title:"Profit & Loss Report", path:"/reports/profit&lossreport"},
      {title:"Event Profit & Loss Report", path:"reports/eventprofit&lossreport"},
      {title:"Bet History", path:"reports/bethistory"},
      {title:"Live Bets", path:"reports/livebets"},
      {title:"Sports Revenue", path:"IP Lookup"}

    ]}
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
    <ul className="p-2 lg:hidden">
      {navItems.map(({ key, label, path, items }) => (
        <li key={key} className="text-[12px]">
          {items ? (
            <div
              className="flex justify-between items-center w-full p-2 border-b border-[#18b0c7] cursor-pointer hover:bg-[#5dcbde] transition-all"
              onClick={() => toggleDropdown(key)}
            >
              {label}
              <i
                className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}
              ></i>
            </div>
          ) : (
            <Link
              to={path}
              className="block w-full p-2 border-b border-[#18b0c7] hover:bg-[#5dcbde] transition-all"
            >
              {label}
            </Link>
          )}

          {items && (
            <ul
              className={`overflow-hidden text-white transition-all duration-300 ${
                dropdowns[key] ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {items.map(({ title, path }, idx) => (
                <li key={idx}>
                  <Link
                    to={path}
                    className="block w-full pl-6 pr-2 py-2 border-b border-[#18b0c7] hover:bg-[#5dcbde] transition-all"
                  >
                    {title}
                  </Link>
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
