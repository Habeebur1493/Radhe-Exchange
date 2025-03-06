import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-xl">
        <i className="fa-solid fa-bars"></i>
      </button>

     {/* Sidebar (Mobile & Desktop) */}
     <div className="flex">
        {/* Sidebar */}
        <div
          className={`lg:block hidden inset-0 bg-opacity-50 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:relative lg:translate-x-0 flex`}
        >
          <div className="h-[100vh] w-57 text-white bg-[#cccccc]">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-xl text-white"
            >
              <i className="text-black block pb-10 ri-close-line"></i>
            </button>

            {/* Others Dropdown */}
            <div className="flex flex-col">
              <div
                className="bg-[#1b3da6] p-1 cursor-pointer flex justify-between text-[18px] items-center transition-all duration-300"
                onClick={toggleOthers}
              >
                <span>Others</span>
                <i
                  className={`ri-arrow-down-s-line transform transition-transform duration-300 ${
                    isOthersOpen ? "rotate-90" : "rotate-0"
                  }`}
                ></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOthersOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
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
            <div className="flex flex-col mt-1 h-screen">
              <div
                className="bg-[#1b3da6] p-1 cursor-pointer flex justify-between text-[18px] items-center transition-all duration-300"
                onClick={toggleAllSports}
              >
                <span>All Sports</span>
                <i
                  className={`ri-arrow-down-s-line transform transition-transform duration-300 ${
                    isAllSportsOpen ? "rotate-90" : "rotate-0"
                  }`}
                ></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isAllSportsOpen ? "h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {/* Internal Dropdown and menus */}
                  <InternalMenu/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
