import React from "react";

const Client = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div className="h-[700px] w-[1490px] bg-white rounded-lg">
          <h1 className="font-bold">Client List</h1>

          <div className="flex justify-between items-center pl-5 pr-5">
          <div>
            <input className="border border-gray-400 rounded-sm p-1" type="text" placeholder="Search"/>
            <input className="border border-gray-400 rounded-sm p-1" type="text" placeholder="Search by Client"/>
          </div>
          <div className="flex justify-between items-center gap-2">
            <h2>Show</h2>
            <select name="" id="">
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <h2>Entries</h2>
            <button>Add Client Account</button>
            <button>Inactive List</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Client;
