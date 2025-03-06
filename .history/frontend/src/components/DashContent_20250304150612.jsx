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
            {/* Cards */}
      <div className="flex flex-row gap-7 mt-4">
        {[
          "P&L",
          "COMMISION",
          "DEPOSIT",
          "WITHDRAWL",
          "TOTAL BETS",
          "SPORTBOOK P&L",
        ].map((item, index) => (
          <div
            key={index}
            className="w-[15%] h-20 bg-white rounded-sm shadow-lg overflow-hidden"
          >
            <h1 className="bg-[#16a2ba] p-2 text-black font-bold text-[15px] rounded-t-sm">
              {item}
            </h1>
            <h1 className="bg-white text-black font-bold text-[18px] p-2 pb-4">0</h1>
          </div>
        ))}
      </div>


{/* Cards -2 */}

        <div>
          <div>
            <h1>TOP 5 WINNING PLAYER</h1>
            <div>
              <p>Player</p>
              <p>Amount</p>
            </div>
          </div>
          <div>
          <h1>TOP 5 LOOSING PLAYER</h1>
            <div>
              <p>Player</p>
              <p>Amount</p>
            </div>
          </div>
          <div>
          <h1>TOP 5 WINNING MARKETS</h1>
            <div>
              <p>Sport</p>
              <p>Market</p>
              <p>Amount</p>
            </div>
          </div>
          <div>
          <h1>TOP 5 LOOSING MARKETS</h1>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DashContent;
