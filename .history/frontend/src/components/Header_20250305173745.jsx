import React from "react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dashboard w-full bg-[#f0f0f5] overflow-x-hidden">
      <header className="bg-[#007182] z-10">
        {/* Dropdown Toggle */}
        <div
          className="cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            className={`ri-arrow-down-circle-fill text-white lg:text-[30px] text-[20px]  transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="bg-[#007182] transition-all duration-300 pb-1 px-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:flex lg:justify-evenly items-center text-white text-[10px] sm:text-[12px] lg:text-[14px] w-full mr-4">
              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  User ID: <span className="ml-2">776demo</span>
                </h4>
                <h4 className="flex justify-between">
                  User Type: <span className="ml-2">Admin</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  Given Bal:{" "}
                  <span className="text-[#20fa5e] ml-2">1000.00</span>
                </h4>
                <h4 className="flex justify-between">
                  Available: <span className="text-[#20fa5e] ml-2">500.00</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  Up Line: <span className="lg:ml-6">0</span>
                </h4>
                <h4 className="flex justify-between">
                  Down Line: <span className="lg:ml-2">0</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto">
                <h4 className="flex justify-between">
                  Current P&L: <span className="lg:ml-2">0</span>
                </h4>
                <h4 className="flex justify-between">
                  Exposure: <span className="lg:ml-8">0</span>
                </h4>
              </div>

              <div className="flex flex-col text-center gap-2 w-full sm:w-1/2 lg:w-auto lg:mb-7 lg:pl-10">
                <h4 className="flex justify-between">
                  My P&L: <span className="lg:ml-10">0</span>
                </h4>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
