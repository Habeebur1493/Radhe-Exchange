import React, { useState } from "react";
import UserLockPopup from "./UserLockPopup";
import BetLockPopup from "./BetLockPopup";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();
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
    <div className="client flex justify-center items-center min-h-screen bg-gray-300">
  <div className="h-screen lg:h-[700px]  w-full max-w-8xl bg-white rounded-lg m-4 p-4">
    <h1 className="font-bold text-lg pl-2 pt-2">Client List</h1>

    {/* Search and Filters */}
    <div className="flex flex-wrap items-center justify-between gap-2 p-4">
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto text-[14px]">
        <input className="border border-gray-400 rounded-sm p-2 w-full sm:w-48" type="text" placeholder="Search" />
        <input className="border border-gray-400 rounded-sm p-2 w-full sm:w-48" type="text" placeholder="Search by Client" />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <h2 className="font-bold text-[14px]">Show</h2>
        <select className="border border-gray-400 p-2 rounded-sm">
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <h2 className="font-bold text-[14px]">Entries</h2>
        <button className="btn3 text-[14px] border border-gray-600  p-2 rounded-sm text-white">Add Client Account</button>
        <button 
         onClick={() => navigate("/inactivelist")}
        className="btn3  text-[14px] border border-gray-600  p-2 rounded-sm text-white">Active List</button>
      </div>
    </div>

    {/* Table Wrapper to Make It Scrollable */}
    <div className="w-full overflow-x-auto">
      <table className="border-collapse border border-gray-400 w-full min-w-[1200px]">
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
            <tr key={index} className="bg-white text-black text-sm">
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
                <div className="flex flex-wrap gap-1">
                  <button className="bg-orange-400 hover:bg-gray-400 font-extrabold text-xs text-white p-1 rounded-sm">U</button>
                  <button className="bg-green-800 hover:bg-gray-400 font-extrabold text-xs text-white p-1 rounded-sm">D|C</button>
                  <button className="bg-blue-900 hover:bg-gray-400 font-extrabold text-xs text-white p-1 rounded-sm">W</button>
                  <button className="bg-yellow-400 hover:bg-gray-400 font-extrabold text-xs text-white p-1 rounded-sm">P</button>
                  <button className="bg-pink-400 hover:bg-gray-400 font-extrabold text-xs text-white p-1 rounded-sm">GC</button>
                  <button className="bg-green-400 hover:bg-gray-400 font-extrabold text-xs text-white p-1 rounded-sm">CC</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Pagination */}
    <div className="mt-4">
      <Pagination data={clientData} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  </div>
</div>

  );
};

export default Client;
