import React from "react";

const Client = () => {
  return (
    <div>
      <div className="client flex justify-center items-center h-screen bg-gray-300">
        <div className="h-[700px] w-[1490px] bg-white rounded-lg">
          <h1 className="font-bold text-[14px] pl-6 pt-2">Client List</h1>

          <div className="flex justify-between items-center pl-5 pr-5 text-[14px]">
            <div className="">
              <input
                className="border border-gray-400 rounded-sm p-1 m-1"
                type="text"
                placeholder="Search"
              />
              <input
                className="border border-gray-400 rounded-sm p-1"
                type="text"
                placeholder="Search by Client"
              />
            </div>
            <div className="flex justify-between items-center gap-2">
              <h2 className="font-bold text-[14px]">Show</h2>
              <select
                className="border border-gray-400 p-1 rounded-sm"
                name=""
                id=""
              >
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <h2 className="font-bold text-[14px]">Entries</h2>
              <button className="btn2 border border-gray-600 bg-[--secondary-background] p-2 rounded-sm">
                Add Client Account
              </button>
              <button className="btn2 border border-gray-600 bg-[--secondary-background] p-2 rounded-sm">
                {" "}
                Inactive List
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center p-4 text-[14px]">
            <table className="border-collapse border border-gray-400 ">
              <thead>
                <tr className="bg-[#016a82] text-white">
                  <th className="border border-gray-400 p-2 pr-5 text-left ">
                    User Name
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    Credit Reference
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    Balance
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    Pending Bal.
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Available Bal.
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    Current P&L
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    Exposure
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    U Lock
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    B Lock
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-3 text-left">
                    My %
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">
                    Type
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-40 text-left">
                    Actions
                    <i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                </tr>
                {/* second row*/}
                <tr className="bg-[#f2f2f2] text-black">
                  <th className="border border-gray-400 p-2  text-right ">
                    -
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    0.00
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    500
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    -500.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    500.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    0.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    0.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    -
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    -
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    -
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    -
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    -
                  </th>
                </tr>
                {/* third row*/}
                <tr className="bg-white text-black">
                  <th className="border border-gray-400 p-2  text-right ">
                    test client 22
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    0.00
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    500
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    -500.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    500.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    0.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    0.00
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                  <button className=" cursor-pointer bg-gray-300 hover:bg-gray-400 border border-gray-500 p-2"></button>
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    <button className=" cursor-pointer bg-gray-300 hover:bg-gray-400 border border-gray-500 p-2"></button>
                  </th>
                  <th className="border border-gray-400 p-2  text-right">
                    90%
                  </th>
                  <th className="border border-gray-400 p-2 text-right">
                    Client
                  </th>
                  <th className="border border-gray-400 p-2 text-right ">
                  <button className=" cursor-pointer bg-orange-400 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">U</button>
                  <button className=" cursor-pointer bg-green-800 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">D|C</button>
                  <button className=" cursor-pointer bg-blue-900 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">W</button>
                  <button className=" cursor-pointer bg-yellow-400 hover:bg-gray-400 font-extrabold text-[10px] p-1 m-1 rounded-sm">P</button>
                  <button className=" cursor-pointer bg-pink-400 hover:bg-gray-400 font-extrabold text-[10px] p-1 m-1 rounded-sm">GC</button>
                  <button className=" cursor-pointer bg-green-400 hover:bg-gray-400 font-extrabold text-[10px] p-1 m-1 rounded-sm">CC</button>
                  
                  
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center pl-10 pr-10">

          <h1 className="text-[14px]">Showing 1 to 1 of 1 entries</h1>

          <div className="text-white text-[14px]">
            <button className="btn3 border border-gray-400 p-2 rounded-l-sm ">First</button>
            <button className="btn3 border border-gray-400 p-2 ">Prev</button>
            <button className="btnsp border border-gray-400 p-2 pl-4 pr-4 ">1</button>
            <button className="btn3 border border-gray-400 p-2 ">Next</button>
            <button className="btn3 border border-gray-400 p-2 rounded-r-sm ">Last</button>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Client;
