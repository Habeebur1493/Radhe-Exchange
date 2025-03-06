import React, { useState } from "react";

const BetLockPopup = () => {
  // State to control the visibility of the popup
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="text-right">
              <button
                className="cursor-pointer bg-gray-300 hover:bg-gray-400 border border-gray-500 p-2"
                onClick={openPopup}
              >
              
              </button>
            </th>
          </tr>
        </thead>
      </table>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-start z-50 pt-16">
          <div className="bg-[#f0f8ff] rounded-lg w-1/3">
            <div className="popup flex justify-between items-center text-[16px] rounded-t-lg">
              <h2 className="text-white p-2">Bet UnLock</h2>
              <button
                className="text-white p-2 "
                onClick={closePopup}
              >
                ×
              </button>
            </div>

            <div className="mt-4 flex items-center pb-4">
              <label
                htmlFor="master-password"
                className="block text-sm font-medium text-gray-700 mr-5 pl-5"
              >
                Master Password
              </label>
              <input
                type="password"
                id="master-password"
                className="p-2 bg-white border border-gray-300 w-80"
                placeholder="Enter master password"
              />
            </div>

            <hr className="text-gray-400" />

            <div className="mt-4 flex justify-end space-x-2 p-4">
              <button
                className=" btn3 text-white p-2 pl-4 pr-4 rounded-md"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="btn3 text-white p-2 pl-4 pr-4 rounded-md"
                onClick={() => {
                  // Handle Submit action
                  console.log("Master Password Submitted");
                  closePopup();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BetLockPopup;
