import React from "react";

const Client = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div className="h-[700px] w-[1490px] bg-white rounded-lg">
          <h1 className="font-bold pl-6 pt-2">Client List</h1>

          <div className="flex justify-between items-center pl-5 pr-5">
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
              <h2 className="font-bold">Show</h2>
              <select
                className="border border-gray-400 p-1 rounded-sm"
                name=""
                id=""
              >
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <h2 className="font-bold">Entries</h2>
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
                  <th className="border border-gray-400 p-2 pr-10 text-left ">
                    User Name<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Credit Reference<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Balance<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Pending Bal.<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th> 
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Available Bal.<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Current P&L<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    Exposure<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    U Lock<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    B Lock<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                    My %<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">
                   Type<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                  <th className="border border-gray-400 p-2 pr-50 text-left">
                    Actions<i className="text-white font-light ri-arrow-up-down-fill"></i>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
