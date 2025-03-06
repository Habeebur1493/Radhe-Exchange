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
  const itemsPerPage = clientData.length;
  const totalPages = Math.ceil(clientData.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = Math.min(currentPage * itemsPerPage, clientData.length);
  const currentClients = clientData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="client flex justify-center items-center min-h-screen bg-gray-300 p-4">
      <div className="h-auto w-full max-w-[1490px] bg-white rounded-lg p-4">
        <h1 className="font-bold text-[14px] pl-2 pt-2">Client List</h1>

        <div className="flex flex-wrap justify-between items-center p-2 text-[14px]">
          <div className="flex flex-wrap gap-2">
            <input className="border border-gray-400 rounded-sm p-1" type="text" placeholder="Search" />
            <input className="border border-gray-400 rounded-sm p-1" type="text" placeholder="Search by Client" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-[14px]">Show</h2>
            <select className="border border-gray-400 p-1 rounded-sm">
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <h2 className="font-bold text-[14px]">Entries</h2>
            <button className="border border-gray-600 bg-gray-200 p-2 rounded-sm">Add Client Account</button>
            <button className="border border-gray-600 bg-gray-200 p-2 rounded-sm">Inactive List</button>
          </div>
        </div>

        <div className="overflow-x-auto p-2">
          <table className="w-full min-w-[800px] border-collapse border border-gray-400">
            <thead>
              <tr className="bg-[#016a82] text-white">
                <th className="border border-gray-400 p-2 text-left">User Name</th>
                <th className="border border-gray-400 p-2 text-left">Credit Reference</th>
                <th className="border border-gray-400 p-2 text-left">Balance</th>
                <th className="border border-gray-400 p-2 text-left">Pending Bal.</th>
                <th className="border border-gray-400 p-2 text-left">Available Bal.</th>
                <th className="border border-gray-400 p-2 text-left">Current P&L</th>
                <th className="border border-gray-400 p-2 text-left">Exposure</th>
                <th className="border border-gray-400 p-2 text-left">U Lock</th>
                <th className="border border-gray-400 p-2 text-left">B Lock</th>
                <th className="border border-gray-400 p-2 text-left">My %</th>
                <th className="border border-gray-400 p-2 text-left">Type</th>
                <th className="border border-gray-400 p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentClients.map((client, index) => (
                <tr key={index} className="bg-white text-black">
                  <td className="border border-gray-400 p-2">{client.name}</td>
                  <td className="border border-gray-400 p-2">{client.credit}</td>
                  <td className="border border-gray-400 text-green-500 p-2">{client.balance}</td>
                  <td className="border border-gray-400 p-2 text-red-500">{client.pending}</td>
                  <td className="border border-gray-400 p-2 text-green-500">{client.available}</td>
                  <td className="border border-gray-400 p-2">{client.pnl}</td>
                  <td className="border border-gray-400 p-2">{client.exposure}</td>
                  <td className="border border-gray-400 p-2"><UserLockPopup /></td>
                  <td className="border border-gray-400 p-2"><BetLockPopup /></td>
                  <td className="border border-gray-400 p-2">{client.percentage}</td>
                  <td className="border border-gray-400 p-2">{client.type}</td>
                  <td className="border border-gray-400 p-2 flex flex-wrap gap-1">
                    <button className="bg-orange-400 text-white p-1 rounded-sm">U</button>
                    <button className="bg-green-800 text-white p-1 rounded-sm">D|C</button>
                    <button className="bg-blue-900 text-white p-1 rounded-sm">W</button>
                    <button className="bg-yellow-400 text-black p-1 rounded-sm">P</button>
                    <button className="bg-pink-400 text-white p-1 rounded-sm">GC</button>
                    <button className="bg-green-400 text-white p-1 rounded-sm">CC</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination data={clientData} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Client;
