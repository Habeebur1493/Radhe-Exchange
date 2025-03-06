import React, { useState } from "react";

const DashContent = () => {
  const getDefaultDateTime = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now.toISOString().slice(0, 16);
  };

  const [fromDateTime, setFromDateTime] = useState(getDefaultDateTime());
  const [toDateTime, setToDateTime] = useState(getDefaultDateTime());

  return (
    <div className="p-4">
      <label className="text-xl font-semibold">Dashboard:</label>

      {/* Date Inputs */}
      <div className="w-full bg-white rounded-md shadow-lg p-4 flex flex-wrap items-center gap-6 mt-4">
        <div className="flex flex-col">
          <label className="text-sm">From Date:</label>
          <input
            type="datetime-local"
            className="border p-2 w-56 rounded-md"
            value={fromDateTime}
            onChange={(e) => setFromDateTime(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">To Date:</label>
          <input
            type="datetime-local"
            className="border p-2 w-56 rounded-md"
            value={toDateTime}
            onChange={(e) => setToDateTime(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            Submit
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            onClick={() => {
              setFromDateTime(getDefaultDateTime());
              setToDateTime(getDefaultDateTime());
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-6 gap-4 mt-4">
        {["P&L", "COMMISSION", "DEPOSIT", "WITHDRAWAL", "TOTAL BETS", "SPORTBOOK P&L"].map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow-lg p-2 text-center">
            <h1 className="bg-teal-500 text-white p-2 rounded-t-md text-sm font-semibold">
              {item}
            </h1>
            <h2 className="text-lg font-bold py-2">0</h2>
          </div>
        ))}
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {["TOP 5 WINNING PLAYER", "TOP 5 LOSING PLAYER", "TOP 5 WINNING MARKETS", "TOP 5 LOSING MARKETS"].map((title, index) => (
          <div key={index} className="bg-white rounded-md shadow-lg overflow-hidden">
            <h1 className="bg-teal-500 p-2 text-white font-bold text-sm rounded-t-md">
              {title}
            </h1>
            <table className="w-full text-xs font-semibold border-collapse">
              <thead>
                <tr className="bg-gray-200 border-gray-400">
                  <th className="p-2 text-left pl-4 border-r border-gray-400">Category</th>
                  <th className="p-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(3)].map((_, i) => (
                  <tr key={i} className="border-t border-gray-200">
                    <td className="p-2 pl-4 border-r border-gray-400">Client</td>
                    <td className="p-2 text-right">$1</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashContent;
