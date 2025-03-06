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
          <div className="flex justify-center items-center p-4">
            <table className="border-collapse border border-gray-400 w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    User Name
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Credit Reference
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Balance
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Pending Bal.
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client Address
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client City
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client State
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client Zip
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client Country
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client Status
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client Action
                  </th>
                  <th className="border border-gray-400 px-4 py-2 text-left">
                    Client Action
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
