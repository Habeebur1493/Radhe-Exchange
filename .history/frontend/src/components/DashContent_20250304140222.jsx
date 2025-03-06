import React, { useState } from "react";

const DashContent = () => {
  const getDefaultDateTime = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now.toISOString().slice(0, 16);
  };

  // State for datetime inputs
  const [fromDateTime, setFromDateTime] = useState(getDefaultDateTime());
  const [toDateTime, setToDateTime] = useState(getDefaultDateTime());

  return (
    <div className="p-4 ">
      <label className="text-xl font-semibold">Dashboard:</label>
      <div className=" h-auto w-full bg-white rounded-sm shadow-lg flex flex-row items-center gap-6 mt-4 p-4 flex-wrap">
        {/* From DateTime */}
        <div className="flex flex-col">
          <label className="text-sm  text-[12px]">From Date:</label>
          <input
            type="datetime-local"
            className="border p-2 w-[230px]"
            value={fromDateTime}
            onChange={(e) => setFromDateTime(e.target.value)}
          />
        </div>

        {/* To DateTime */}
        <div className="flex flex-col">
          <label className="text-sm text-[12px]">To Date:</label>
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

      <div className="flex flex-row gap-2 mt-4">
        <div className="h-5 w-10 bg-white rounded-sm">
          <h1 className="">P&L</h1>
          <h1>0</h1>
        </div>
        <div className="h-[5%] w-[10%] bg-white rounded-sm">
          <h1>COMMISION</h1>
          <h1>0</h1>
        </div>
        <div className="h-[5%] w-[10%] bg-white rounded-sm">
          <h1>DEPOSIT</h1>
          <h1>0</h1>
        </div>
        <div className="h-[5%] w-[10%] bg-white rounded-sm">
          <h1>WITHDRAWL</h1>
          <h1>0</h1>
        </div>
        <div className="h-[5%] w-[10%] bg-white rounded-sm">
          <h1>TOTAL BETS</h1>
          <h1>0</h1>
        </div>
        <div className="h-[5%] w-[10%] bg-white rounded-sm">
          <h1>SPORTBOOK P&L</h1>
          <h1>0</h1>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
