import React, { useState } from "react";
import UserLockPopup from "./UserLockPopup";
import BetLockPopup from "./BetLockPopup";
import Pagination from "./Pagination";

const Client = () => {
  const clientData = [
    { name: "test client 22", credit: "0.00", balance: 500, pendingBal: -500, availableBal: 500, percent: "90%", type: "Client" },
    { name: "client 2", credit: "100.00", balance: 600, pendingBal: -200, availableBal: 400, percent: "85%", type: "Client" },
    { name: "client 3", credit: "50.00", balance: 300, pendingBal: -100, availableBal: 200, percent: "80%", type: "Client" },
    { name: "client 4", credit: "75.00", balance: 800, pendingBal: -300, availableBal: 500, percent: "88%", type: "Client" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Adjust as needed

  // Calculate displayed clients
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClients = clientData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="client flex justify-center items-center h-screen bg-gray-300">
        <div className="h-[700px] w-[1490px] bg-white rounded-lg">
          <h1 className="font-bold text-[14px] pl-6 pt-2">Client List</h1>

          {/* Table */}
          <div className="flex justify-center items-center p-4 text-[14px]">
            <table className="border-collapse border border-gray-400">
              <thead>
                <tr className="bg-[#016a82] text-white">
                  <th className="border border-gray-400 p-2 pr-5 text-left">User Name</th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">Credit Reference</th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">Balance</th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">Pending Bal.</th>
                  <th className="border border-gray-400 p-2 pr-10 text-left">Available Bal.</th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">My %</th>
                  <th className="border border-gray-400 p-2 pr-5 text-left">Type</th>
                  <th className="border border-gray-400 p-2 pr-40 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentClients.map((client, index) => (
                  <tr key={index} className="bg-white text-black">
                    <td className="border border-gray-400 p-2 text-right">{client.name}</td>
                    <td className="border border-gray-400 p-2 text-right">{client.credit}</td>
                    <td className="border border-gray-400 text-green-500 p-2 text-right">{client.balance}</td>
                    <td className="border border-gray-400 p-2 text-red-500 text-right">{client.pendingBal}</td>
                    <td className="border border-gray-400 p-2 text-green-500 text-right">{client.availableBal}</td>
                    <td className="border border-gray-400 p-2 text-right">{client.percent}</td>
                    <td className="border border-gray-400 p-2 text-right">{client.type}</td>
                    <td className="border border-gray-400 p-2 text-right">
                      <button className="bg-orange-400 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">U</button>
                      <button className="bg-green-800 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">D|C</button>
                      <button className="bg-blue-900 hover:bg-gray-400 font-extrabold text-[10px] text-white p-1 m-1 rounded-sm">W</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            data={clientData}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
