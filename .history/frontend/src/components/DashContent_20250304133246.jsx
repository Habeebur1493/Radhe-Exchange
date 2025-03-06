import React from "react";

const DashContent = () => {
  return (
    <div className="p-4">
      <label className="text-xl font-semibold">Dashboard:</label>
      <div className="h-[5%] w-[100%] bg-white shadow-lg flex flex-row items-center gap-4 mt-4 p-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">From Date:</label>
          <input
            type="date"
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">To Date:</label>
          <input
            type="date"
            className="border p-2 "
          />
        </div>
        <div className="flex gap-2">
          <button className="btn1 bg-[--primary-background] text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
