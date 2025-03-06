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
        className={`fixed top-0 left-0 h-full w-64 mt-10 bg-gray-800 text-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold">Sidebar</h2>
        <ul className="mt-4">
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Services</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
