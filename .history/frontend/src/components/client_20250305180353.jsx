import React from "react";
import { Outlet } from "react-router-dom";


const Client = () => {
  return (
    <div>
     <h1>Client</h1>


     <Outlet/>
    </div>
  );
};

export default Client;
