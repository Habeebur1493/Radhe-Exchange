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
          <div className="bg-[#f0f8ff] rounded-t w-1/3">
            <div className="popup flex justify-between items-center  ">
              <h2 className="text-white p-2">Bet Lock</h2>
              <button
                className="text-white"
                onClick={closePopup}
              >
                ×
              </button>
            </div>

            <div className="mt-4 flex items-center pb-4">
              <label
                htmlFor="master-password"
                className="block text-sm font-medium text-gray-700 mr-7"
              >
                Master Password
              </label>
              <input
                type="password"
                id="master-password"
                className="p-2 bg-white border border-gray-300 rounded-md w-80"
                placeholder="Enter master password"
              />
            </div>

            <hr className="text-gray-400" />

            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-md"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
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
