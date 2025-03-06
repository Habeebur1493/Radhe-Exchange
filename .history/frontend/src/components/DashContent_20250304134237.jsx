import React, { useState } from "react";

const DashContent = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // State for date and time
  const [fromDate, setFromDate] = useState(today);
  const [fromTime, setFromTime] = useState("00:00");
  const [toDate, setToDate] = useState(today);
  const [toTime, setToTime] = useState("00:00");

  return (
    <div className="p-4">
      <label className="text-xl font-semibold">Dashboard:</label>
      <div className="h-auto w-[100%] bg-white shadow-lg flex flex-row items-center gap-6 mt-4 p-4 flex-wrap">
        {/* From Date & Time */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">From Date:</label>
          <input
            type="date"
            className="border p-2 w-[170px]"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">From Time:</label>
          <input
            type="time"
            className="border p-2 w-[170px]"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
        </div>

        {/* To Date & Time */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">To Date:</label>
          <input
            type="date"
            className="border p-2 w-[170px]"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">To Time:</label>
          <input
            type="time"
            className="border p-2 w-[170px]"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="bg-[--primary-background] text-white px-4 py-2 rounded-l-sm">
            Submit
          </button>
          <button
            className="bg-[#db3545] text-white px-4 py-2 rounded-r-sm hover:bg-red-700"
            onClick={() => {
              setFromDate(today);
              setFromTime("00:00");
              setToDate(today);
              setToTime("00:00");
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
