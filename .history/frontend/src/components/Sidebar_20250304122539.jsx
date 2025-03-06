import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isAllSportsOpen, setIsAllSportsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleOthers = () => setIsOthersOpen(!isOthersOpen);
  const toggleAllSports = () => setIsAllSportsOpen(!isAllSportsOpen);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={toggleSidebar} className="p-2 text-xl">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Sidebar (Mobile & Desktop) */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative top-0 left-0 h-full bg-opacity-50 transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 w-64 bg-[#cccccc] p-4`}
        >
          <button onClick={toggleSidebar} className="lg:hidden text-xl text-black">
            <i className="ri-close-line"></i>
          </button>

          {/* Others Dropdown */}
          <div className="flex flex-col mt-4">
            <div
              className="bg-[#1b3da6] p-2 cursor-pointer flex justify-between text-[18px] text-white items-center transition-all duration-300"
              onClick={toggleOthers}
            >
              <span>Others</span>
              <i className={`ri-arrow-down-s-line transition-transform ${isOthersOpen ? "rotate-90" : "rotate-0"}`}></i>
            </div>
            <div className={`overflow-hidden transition-all ${isOthersOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="bg-[#bababa] text-black text-[14px]">
                <a className="block p-2">TP T20</a>
                <hr className="text-gray-400" />
                <a className="block p-2">TP 1 DAY</a>
                <hr className="text-gray-400" />
                <a className="block p-2">TP TEST</a>
                <hr className="text-gray-400" />
                <a className="block p-2">DT 1 DAY</a>
                <hr className="text-gray-400" />
                <a className="block p-2">32 CARDS</a>
              </div>
            </div>
          </div>

          {/* All Sports Dropdown */}
          <div className="flex flex-col mt-2">
            <div
              className="bg-[#1b3da6] p-2 cursor-pointer flex justify-between text-[18px] text-white items-center transition-all duration-300"
              onClick={toggleAllSports}
            >
              <span>All Sports</span>
              <i className={`ri-arrow-down-s-line transition-transform ${isAllSportsOpen ? "rotate-90" : "rotate-0"}`}></i>
            </div>
            <div className={`overflow-hidden transition-all ${isAllSportsOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
              <InternalMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder for InternalMenu component
const InternalMenu = () => (
  <div className="bg-gray-200 text-black p-4">Internal Menu Content</div>
);

export default Sidebar;
