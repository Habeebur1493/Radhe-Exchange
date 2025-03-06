import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 mt-14 bg-gray-800 text-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
    
        <ul className="">
          <li className="">Cricket</li>
          <li className="">Soccer</li>
          <li className="">Tennis Horse</li>
          <li className="">GreyHound</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
