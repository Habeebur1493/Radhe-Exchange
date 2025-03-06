import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard";
import Client from "./components/client";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client/>} />
      </Routes>
    </div>
  );
};

export default App;
