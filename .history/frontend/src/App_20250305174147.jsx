import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/Register";
import Dashboard from "./components/Home";
import Client from "./components/client";
import Layout from "./components/Layout";
import Home from "./components/Home";


const App = () => {
  return (
    
      <Routes>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default Home Route */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="client" element={<Client />} />
        </Route>

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    
  );
};

export default App;
