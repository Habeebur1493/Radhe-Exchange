import React, { useState } from "react";

const DashContent = () => {
  // Get today's date with time set to 00:00 in the correct format
  const getDefaultDateTime = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set time to 00:00
    return now.toISOString().slice(0, 16); // Format YYYY-MM-DDTHH:MM
  };

  // State for datetime inputs
  const [fromDateTime, setFromDateTime] = useState(getDefaultDateTime());
  const [toDateTime, setToDateTime] = useState(getDefaultDateTime());

  return (
    <div className="p-4 ">
      <label className="text-xl font-semibold">Dashboard:</label>
      <div className="h-auto w-full bg-white shadow-lg flex flex-row items-center gap-6 mt-4 p-4 flex-wrap">
        {/* From DateTime */}
        <div className="flex flex-col">
          <label className="text-sm  text-[13px]">From Date:</label>
          <input
            type="datetime-local"
            className="border p-2 w-[230px]"
            value={fromDateTime}
            onChange={(e) => setFromDateTime(e.target.value)}
          />
        </div>

        {/* To DateTime */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[12px]">To Date:</label>
          <input
            type="datetime-local"
            className="border p-2 w-[230px]"
            value={toDateTime}
            onChange={(e) => setToDateTime(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 ">
          <button className="btn1 bg-[--primary-background] text-white px-4 py-2 rounded-l-sm">
            Submit
          </button>
          <button
            className="bg-[#db3545] text-white px-4 py-2 rounded-r-sm hover:bg-red-700"
            onClick={() => {
              setFromDateTime(getDefaultDateTime());
              setToDateTime(getDefaultDateTime());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
