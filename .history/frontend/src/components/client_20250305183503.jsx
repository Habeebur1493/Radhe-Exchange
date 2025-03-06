import React from "react";

const Client = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-300">
        <div className="h-[700px] w-[1490px] bg-white rounded-lg">
          <h1 className="font-bold">Client List</h1>
          <div>
            <input type="text" placeholder="Search"/>
            <input type="text" placeholder="Search by Client"/>
          </div>
          <div>
            <h2>Show</h2>
            <select name="" id="">
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
