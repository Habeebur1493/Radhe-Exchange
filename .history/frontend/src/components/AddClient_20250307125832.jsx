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
    
    
  </div>
</div>
  )
}

export default AddClient