import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { key: "Dashboard", label: "Dashboard", path: "/dashboard", icon: "/icons/dashboard.svg" },
  { key: "Clients", label: "Clients", path: "/clients", icon: "/icons/clients.svg" },
  { key: "SportAnalysis", label: "Sport Analysis", path: "/sport-analysis", icon: "/icons/sport.svg" },
  { key: "CasinoAnalysis", label: "Casino Analysis", path: "/casino-analysis", icon: "/icons/casino.svg" },
  {
    key: "Settlement",
    label: "Settlement",
    icon: "/icons/settlement.svg",
    items: [
      { title: "User", path: "/settlement/user" },
      { title: "Master", path: "/settlement/master" },
    ],
  },
  {
    key: "Reports",
    label: "Reports",
    icon: "/icons/reports.svg",
    items: [
      { title: "UserDetail", path: "/reports/userdetail" },
      { title: "Account Statement", path: "/reports/accountstatement" },
      { title: "Settlement/Balance Report", path: "/reports/settlementbalancereport" },
      { title: "Transaction Report", path: "/reports/transactionreport" },
      { title: "Current Bets", path: "/reports/currentbets" },
      { title: "Profit & Loss Report", path: "/reports/profit&lossreport" },
      { title: "Event Profit & Loss Report", path: "/reports/eventprofit&lossreport" },
      { title: "Bet History", path: "/reports/bethistory" },
      { title: "Live Bets", path: "/reports/livebets" },
      { title: "Sports Revenue", path: "/icons/revenue.svg" },
    ],
  },
  {
    key: "Cutting",
    label: "Cutting",
    icon: "/icons/cutting.svg",
    items: [
      { title: "Agent Master", path: "/cutting/agentmaster" },
      { title: "Cutting History", path: "/cutting/cuttinghistory" },
    ],
  },
  {
    key: "Control",
    label: "Control",
    icon: "/icons/control.svg",
    items: [
      { title: "Game Control", path: "/control/gamecontrol" },
      { title: "Casino Control", path: "/control/casinocontrol" },
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
    <ul className="p-2 lg:hidden">
    {navItems.map(({ key, label, path, icon, items }) => (
      <li key={key} className="text-[12px]">
        {items ? (
          <div
            className="flex justify-between items-center w-full p-2 border-b border-[#18b0c7] cursor-pointer hover:bg-[#5dcbde] transition-all"
            onClick={() => toggleDropdown(key)}
          >
            <div className="flex items-center gap-2">
              {icon && <img src={icon} alt={label} className="w-4 h-4" />}
              {label}
            </div>
            <i className={`fa-solid fa-caret-${dropdowns[key] ? "up" : "down"}`}></i>
          </div>
        ) : (
          <Link
            to={path}
            className="flex items-center gap-2 w-full p-2 border-b border-[#18b0c7] hover:bg-[#5dcbde] transition-all"
          >
            {icon && <img src={icon} alt={label} className="w-4 h-4" />}
            {label}
          </Link>
        )}

        {items && (
          <ul
            className={`overflow-hidden text-white transition-all duration-300 ${
              dropdowns[key] ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
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
