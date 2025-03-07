import React, { useState } from "react";
import UserLockPopup from "./UserLockPopup";
import BetLockPopup from "./BetLockPopup";
import Pagination from "./Pagination";

const Client = () => {
  const clientData = [
    { name: "test client 22", credit: "0.00", balance: "500", pending: "-500.00", available: "500.00", pnl: "0.00", exposure: "0.00", percentage: "90%", type: "Client" },
    { name: "client 2", credit: "100.00", balance: "600", pending: "-300.00", available: "700.00", pnl: "50.00", exposure: "20.00", percentage: "85%", type: "Client" },
    { name: "client 3", credit: "200.00", balance: "700", pending: "-400.00", available: "800.00", pnl: "60.00", exposure: "30.00", percentage: "80%", type: "VIP" },
    { name: "client 4", credit: "300.00", balance: "800", pending: "-500.00", available: "900.00", pnl: "70.00", exposure: "40.00", percentage: "75%", type: "Agent" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 1;
  const itemsPerPage = clientData.length;

  const totalPages = Math.ceil(clientData.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(currentPage * itemsPerPage, clientData.length);
  const currentClients = clientData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="client flex justify-center items-center h-screen bg-gray-300 min-h-screen">
        <div className="h-[700px] w-[1490px] bg-white rounded-lg">
          <h1 className="font-bold text-[14px] pl-6 pt-2">Client List</h1>

          <div className="flex justify-between sm:flex-wrap items-center pl-5 pr-5 text-[14px]">
            <div className="sm:grid-cols-2">
              <input className="border border-gray-400 rounded-sm p-1 m-1" type="text" placeholder="Search" />
              <input className="border border-gray-400 rounded-sm p-1" type="text" placeholder="Search by Client" />
            </div>
            <div className="flex justify-between items-center gap-2 sm:w-auto">
              <h2 className="font-bold text-[14px]">Show</h2>
              <select className="border border-gray-400 p-1 rounded-sm">
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <h2 className="font-bold text-[14px]">Entries</h2>
              <button className="btn2 border border-gray-600 bg-[--secondary-background] p-2 rounded-sm">Add Client Account</button>
              <button className="btn2 border border-gray-600 bg-[--secondary-background] p-2 rounded-sm">Active List</button>
            </div>
          </div>

          <div className="flex justify-center items-center p-4 text-[14px]">
  <div className="w-full overflow-x-auto">
    <table className="border-collapse border border-gray-400 min-w-max">
      <thead>
        <tr className="bg-[#016a82] text-white">
          <th className="border border-gray-400 p-2 pr-5 text-left">User Name<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">Credit Reference<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">Balance<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">Pending Bal.<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-10 text-left">Available Bal.<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">Current P&L<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">Exposure<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">U Lock<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">B Lock<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-3 text-left">My %<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-5 text-left">Type<i className="ri-arrow-up-down-fill"></i></th>
          <th className="border border-gray-400 p-2 pr-40 text-left">Actions<i className="ri-arrow-up-down-fill"></i></th>
        </tr>
      </thead>
      <tbody>
        {currentClients.map((client, index) => (
          <tr key={index} className="bg-white text-black">
            <td className="border border-gray-400 p-2 text-right">{client.name}</td>
            <td className="border border-gray-400 p-2 text-right">{client.credit}</td>
            <td className="border border-gray-400 text-green-500 p-2 text-right">{client.balance}</td>
            <td className="border border-gray-400 p-2 text-red-500 text-right">{client.pending}</td>
            <td className="border border-gray-400 p-2 text-green-500 text-right">{client.available}</td>
            <td className="border border-gray-400 p-2 text-right">{client.pnl}</td>
            <td className="border border-gray-400 p-2 text-right">{client.exposure}</td>
            <td className="border border-gray-400 p-2 text-right"><UserLockPopup /></td>
            <td className="border border-gray-400 p-2 text-right"><BetLockPopup /></td>
            <td className="border border-gray-400 p-2 text-right">{client.percentage}</td>
            <td className="border border-gray-400 p-2 text-right">{client.type}</td>
            <td className="border border-gray-400 p-2 text-right">
              <button className="cursor-pointer bg-orange-400 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">U</button>
              <button className="cursor-pointer bg-green-800 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">D|C</button>
              <button className="cursor-pointer bg-blue-900 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">W</button>
              <button className="cursor-pointer bg-yellow-400 hover:bg-gray-400 font-extrabold text-[10px] p-1 m-1 rounded-sm">P</button>
              <button className="cursor-pointer bg-pink-400 hover:bg-gray-400 font-extrabold text-[10px] p-1 m-1 rounded-sm">GC</button>
              <button className="cursor-pointer bg-green-400 hover:bg-gray-400 font-extrabold text-[10px] p-1 m-1 rounded-sm">CC</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


          {/* Pagination */}
          <Pagination data={clientData} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
};

export default Client;
