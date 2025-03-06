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
            className="w-[15%] h-18 bg-white rounded-sm shadow-lg overflow-hidden"
          >
            <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px] rounded-t-sm">
              {item}
            </h1>
            <h1 className="bg-white text-black font-bold text-[18px] pl-2 pt-2">
              0
            </h1>
          </div>
        ))}
      </div>

      {/* Cards row-2 */}
      <div className="flex justify-between items-center mt-4">
        {/* Top 5 Winning Players */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px] rounded-t-sm">
            TOP 5 WINNING PLAYER
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className="bg-gray-200 border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-2/3">
                  Player
                </th>
                <th className="p-2 text-right w-1/3">Amount</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Top 5 Losing Players */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">
            TOP 5 LOSING PLAYER
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className="bg-gray-200 border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-2/3">
                  Player
                </th>
                <th className="p-2 text-right w-1/3">Amount</th>
              </tr>
            </thead>
            
          </table>
        </div>

        {/* Top 5 Winning Markets */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">
            TOP 5 WINNING MARKETS
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className="bg-gray-200 border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-1/3">
                  Sport
                </th>
                <th className="p-2 text-left border-r border-gray-400 w-1/3">
                  Market
                </th>
                <th className="p-2 text-right w-1/3">Amount</th>
              </tr>
            </thead>
           
          </table>
        </div>

        {/* Top 5 Losing Markets */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">
            TOP 5 LOSING MARKETS
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className="bg-gray-200 border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-1/3">
                  Sport
                </th>
                <th className="p-2 text-left border-r border-gray-400 w-1/3">
                  Market
                </th>
                <th className="p-2 text-right w-1/3">Amount</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>


     {/* cards 3 row*/}
        

     <div className="flex justify-between items-center mt-4">
        {/* Top 5 Winning Players */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px] rounded-t-sm">
            USER COUNT
          </h1>
          <span className="text-white underline">Overall Count</span>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className=" border-gray-400">
                <th className="p-2 text-left pl-4 border-b border-r border-gray-400 w-2/3">
                  Role
                </th>
                <th className="p-2 text-right w-1/3 border-b border-gray-400 ">Count</th>
              </tr>
              <tr className="bg-[#f2f2f2] border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-2/3">
                  Client
                </th>
                <th className="p-2 text-right w-1/3">1</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Top 5 Losing Players */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">
            TOP 5 LOSING PLAYER
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
            <tr className=" border-gray-400">
                <th className="p-1 text-left w-2/3">
                  <select name="" id="" className="bg-white border border-gray-300 text-gray-500 font-normal p-2 rounded-sm">
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
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-2/3">
                  Total Bets
                </th>
                <th className="p-2 text-right w-1/3">0</th>
              </tr>
              <tr className=" border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-2/3">
                  Total Bet Amount
                </th>
                <th className="p-2 text-right w-1/3">0</th>
              </tr>
              <tr className="bg-[#f2f2f2] border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-2/3">
                  Total P&L
                </th>
                <th className="p-2 text-right w-1/3">0</th>
              </tr>
            </thead>
            
          </table>
        </div>

        {/* Top 5 Winning Markets */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">
            TOP 5 WINNING MARKETS
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className="bg-gray-200 border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-1/3">
                  Sport
                </th>
                <th className="p-2 text-left border-r border-gray-400 w-1/3">
                  Market
                </th>
                <th className="p-2 text-right w-1/3">Amount</th>
              </tr>
            </thead>
           
          </table>
        </div>

        {/* Top 5 Losing Markets */}
        <div className="flex flex-col w-[23%] bg-white rounded-sm shadow-lg overflow-hidden">
          <h1 className="bg-[#16a2ba] p-1 text-black font-bold text-[15px]">
            TOP 5 LOSING MARKETS
          </h1>
          <table className="w-full text-[12px] font-bold border-collapse">
            <thead>
              <tr className="bg-gray-200 border-gray-400">
                <th className="p-2 text-left pl-4 border-r border-gray-400 w-1/3">
                  Sport
                </th>
                <th className="p-2 text-left border-r border-gray-400 w-1/3">
                  Market
                </th>
                <th className="p-2 text-right w-1/3">Amount</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

    </div>
  );
};

export default DashContent;
