import React from 'react'
import { useState } from "react";

const AddClient = () => {

        const [formData, setFormData] = useState({
          accountType: "",
          clientName: "",
          commission: 1,
          creditReference: "",
          depositAmount: "",
          depositRemark: "",
          userName: "",
          password: "",
          retypePassword: "",
          referenceName: "",
          masterPassword: "",
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Form Submitted", formData);
        };

  return (
    <div className="client flex justify-center items-center min-h-screen bg-gray-300">
  <div className="h-screen lg:h-[700px]  w-full max-w-8xl bg-white rounded-lg m-4 p-4">
    <h1 className="font-bold text-[16px] pl-2 pt-2">Add/Edit Client Account</h1>
    
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
  {/* First Column */}
  <div className="space-y-4">
    {/* Account Details */}
    <fieldset className="border p-4 rounded">
      <legend className="font-bold">Account Details:</legend>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Account Type:</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select User Type</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div>
          <label className="block">Client Name:</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Client Name"
          />
        </div>
      </div>
    </fieldset>

    {/* Commission */}
    <fieldset className="border p-4 rounded">
      <legend className="font-bold">Commission:</legend>
      <p>Cricket / Soccer / Tennis</p>
      <div className="flex items-center gap-2">
        <label className="font-semibold">Commission: M.O</label>
        <input
          type="number"
          name="commission"
          value={formData.commission}
          onChange={handleChange}
          className="w-16 p-2 border rounded"
        />
        <span>% ({formData.commission}%)</span>
      </div>
    </fieldset>

    {/* Sport & Casino Balance */}
    <fieldset className="border p-4 rounded">
      <legend className="font-bold">Sport & Casino Balance</legend>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block">Credit Reference:</label>
          <input
            type="text"
            name="creditReference"
            value={formData.creditReference}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Credit Reference"
          />
        </div>
        <div>
          <label className="block">Add Deposit:</label>
          <input
            type="number"
            name="depositAmount"
            value={formData.depositAmount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Amount"
          />
        </div>
        <div>
          <label className="block">Deposit Remark:</label>
          <input
            type="text"
            name="depositRemark"
            value={formData.depositRemark}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Remark"
          />
        </div>
      </div>
    </fieldset>
  </div>

  {/* Second Column */}
  <div className="space-y-4">
    {/* Personal Details */}
    <fieldset className="border p-4 rounded">
      <legend className="font-bold">Personal Details:</legend>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">User Name:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="User Name"
          />
        </div>
        <div>
          <label className="block">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Password"
          />
        </div>
        <div>
          <label className="block">Retype Password:</label>
          <input
            type="password"
            name="retypePassword"
            value={formData.retypePassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Retype Password"
          />
        </div>
        <div>
          <label className="block">Reference Name:</label>
          <input
            type="text"
            name="referenceName"
            value={formData.referenceName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Reference Name"
          />
        </div>
      </div>
    </fieldset>

    {/* Master Password & Submit Button */}
<div className="flex justify-evenly items-center gap-4">
  <div className="flex-1">
    <label className="block font-bold">Master Password:</label>
    <input
      type="password"
      name="masterPassword"
      value={formData.masterPassword}
      onChange={handleChange}
      className="w-[40%] p-2 border rounded"
      placeholder="Master Password"
    />
  </div>
  
  <button
    type="submit"
    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-[10%]"
  >
    Create Account
  </button>
</div>
  </div>
</form>

    
  </div>
</div>
  )
}

export default AddClient