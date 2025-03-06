import React, { useState } from "react";

const Dashboard = () => {
  const getDefaultDateTime = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now.toISOString().slice(0, 16);
  };

  // State for datetime inputs
  const [fromDateTime, setFromDateTime] = useState(getDefaultDateTime());
  const [toDateTime, setToDateTime] = useState(getDefaultDateTime());

  return (
    <div className="p-4 min-h-screen sm:min-h-[100vh] w-full pb-10">
      <label className="text-[15px] font-semibold">Dashboard:</label>
      <div className="h-auto w-full bg-white rounded-sm shadow-lg flex flex-row md:flex-row items-center gap-6 mt-2 p-4 flex-wrap">
        {/* From DateTime */}
        <div className="flex flex-col">
          <label className="text-sm text-[12px]">From Date:</label>
          <input
            type="datetime-local"
            className="border p-1 rounded-sm border-gray-300 w-[130px] lg:w-[230px] "
            value={fromDateTime}
            onChange={(e) => setFromDateTime(e.target.value)}
          />
        </div>

        {/* To DateTime */}
        <div className="flex flex-col">
          <label className="text-sm text-[12px]">To Date:</label>
          <input
            type="datetime-local"
            className="border p-1 rounded-sm border-gray-300 w-[130px] lg:w-[230px]"
            value={toDateTime}
            onChange={(e) => setToDateTime(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row md:flex-row gap-2 w-full md:w-auto justify-start mt-4 md:mt-0">
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
      <div className="dash grid grid-cols-2 md:flex md:flex-row gap-4 mt-4">
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
      className="w-full md:w-[15%] h-18 bg-white rounded-sm shadow-lg overflow-hidden"
    >
      <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[14px] rounded-t-sm">
        {item}
      </h1>
      <h1 className="bg-white text-black font-bold text-[18px] pl-2 pt-2">
        0
      </h1>
    </div>
  ))}
</div>


      {/* Cards row-2 */}
      <div className="flex flex-wrap justify-between items-center mt-4 gap-4">
  {/* Common Styles for Each Box */}
  {[
    { title: "TOP 5 WINNING PLAYER", columns: ["Player", "Amount"] },
    { title: "TOP 5 LOSING PLAYER", columns: ["Player", "Amount"] },
    { title: "TOP 5 WINNING MARKETS", columns: ["Sport", "Market", "Amount"] },
    { title: "TOP 5 LOSING MARKETS", columns: ["Sport", "Market", "Amount"] },
  ].map((box, index) => (
    <div
      key={index}
      className="flex flex-col w-full md:w-[23%] bg-white rounded-sm shadow-lg overflow-hidden"
    >
      <h1 className="bg-[#16a2ba] p-1 pl-2 text-black font-bold text-[15px] rounded-t-sm">
        {box.title}
      </h1>
      <table className="w-full text-[12px] font-bold border-collapse">
        <thead>
          <tr className="bg-gray-200 border-gray-400">
            {box.columns.map((col, idx) => (
              <th
                key={idx}
                className={`p-1 ${
                  idx === 0
                    ? "text-left pl-4 border-r border-gray-400"
                    : idx === box.columns.length - 1
                    ? "text-right"
                    : "text-left border-r border-gray-400"
                } w-${12 / box.columns.length}/12`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  ))}
</div>


      {/* cards 3 row*/}

      <div className="flex flex-wrap justify-between items-start w-full mt-4 text-[12px] gap-4">
  {/* USER COUNT */}
  <div className="flex flex-col w-full sm:w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
    <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px] rounded-t-sm">
      USER COUNT
      <span className="text-white underline text-[12px] font-normal ml-40">
        Overall Count
      </span>
    </h1>
    <table className="w-full text-[12px] font-bold border-collapse">
      <thead>
        <tr className="border-gray-400">
          <th className="p-1 text-left pl-4 border-b border-r border-gray-400 w-4/5">
            Role
          </th>
          <th className="p-1 text-right w-1/3 border-b border-gray-400">Count</th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-r font-normal border-gray-400 w-4/5">
            Client
          </th>
          <th className="p-1 text-right font-normal w-1/3">1</th>
        </tr>
      </thead>
    </table>
  </div>

  {/* SPORTS GAMEPLAY DETAILS */}
  <div className="flex flex-col w-full sm:w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
    <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">SPORTS GAMEPLAY DETAILS</h1>
    <table className="w-full text-[12px] font-bold border-collapse">
      <thead>
        <tr className="border-gray-400">
          <th className="p-1 text-left w-2/3">
            <select className="bg-white border border-gray-300 text-gray-500 font-normal p-1 rounded-sm">
              <option value="select sports">Select Sports</option>
              <option value="cricket">Cricket</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
              <option value="horse">Horse</option>
              <option value="greyhound">Greyhound</option>
              <option value="kabbadi">Kabbadi</option>
            </select>
          </th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border border-gray-400 font-normal w-4/5">Total Bets</th>
          <th className="p-1 text-right w-1/3 border-r-0  border border-gray-400 font-normal">0</th>
        </tr>
        <tr className="border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0  border border-gray-400 font-normal w-2/3">Total Bet Amount</th>
          <th className="p-1 text-right w-1/3 font-normal border-r-0 border border-gray-400">0</th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0  border-b-0 border border-gray-400 font-normal w-2/3">Total P&L</th>
          <th className="p-1 text-right w-1/3 font-normal border-r-0 border-b-0 border border-gray-400">0</th>
        </tr>
      </thead>
    </table>
  </div>

  {/* OTHER GAMEPLAY DETAILS */}
  <div className="flex flex-col w-full sm:w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
    <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">SPORTS GAMEPLAY DETAILS</h1>
    <table className="w-full text-[12px] font-bold border-collapse">
      <thead>
        <tr className="border-gray-400">
          <th className="p-1 text-left w-2/3">
            <select className="bg-white border border-gray-300 text-gray-500 font-normal p-1 rounded-sm">
              <option value="select sports">Select Sports</option>
              <option value="cricket">Cricket</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
              <option value="horse">Horse</option>
              <option value="greyhound">Greyhound</option>
              <option value="kabbadi">Kabbadi</option>
            </select>
          </th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0  border border-gray-400 font-normal w-4/5">Total Bets</th>
          <th className="p-1 text-right w-1/3 border-r-0 border border-gray-400 font-normal">0</th>
        </tr>
        <tr className="border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0  border border-gray-400 font-normal w-2/3">Total Bet Amount</th>
          <th className="p-1 text-right w-1/3 font-normal border-r-0 border border-gray-400">0</th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border-b-0  border border-gray-400 font-normal w-2/3">Total P&L</th>
          <th className="p-1 text-right w-1/3 font-normal border-r-0 border-b-0 border border-gray-400">0</th>
        </tr>
      </thead>
    </table>
  </div>

  {/* CASINO GAMEPLAY DETAILS */}
  <div className="flex flex-col w-full sm:w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
    <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">CASINO GAMEPLAY DETAILS</h1>
    <table className="w-full text-[12px] font-bold border-collapse">
      <thead>
        <tr className="border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0   border border-gray-400 font-normal w-4/5">Indian Poker/ Live Casino P&L</th>
          <th className="p-1 text-right w-1/3 border-r-0  border border-gray-400 font-normal">0</th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border border-gray-400 font-normal w-4/5">Indian Poker II P&L</th>
          <th className="p-1 text-right w-1/3 border-r-0  border border-gray-400 font-normal">0</th>
        </tr>
        <tr className="border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border-b-0 border border-gray-400 font-normal w-2/3">Evolution P&L</th>
          <th className="p-1 text-right w-1/3 font-normal border-r-0  border-b-0 border border-gray-400">0</th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border border-gray-400 font-normal w-4/5">Betgames P&L</th>
          <th className="p-1 text-right w-1/3 border-r-0  border border-gray-400 font-normal">0</th>
        </tr>
        <tr className="border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border-b-0 border border-gray-400 font-normal w-2/3">Evolution P&L</th>
          <th className="p-1 text-right w-1/3 font-normal border-r-0  border-b-0 border border-gray-400">0</th>
        </tr>
        <tr className="bg-[#f2f2f2] border-gray-400">
          <th className="p-1 text-left pl-4 border-l-0 border border-gray-400 font-normal w-4/5">Indian Poker II P&L</th>
          <th className="p-1 text-right w-1/3 border-r-0  border border-gray-400 font-normal">0</th>
        </tr>
      </thead>
    </table>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
