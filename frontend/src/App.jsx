import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Client from "./components/Client";
import Home from "./components/Home";
import Layout from "./components/Layout"; 
import UserLockPopup from "./components/UserLockPopup";
import BetLockPopup from "./components/BetLockPopup";
import SportAnalysis from "./components/SportAnalysis";
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute
import "./App.css";

const App = () => {
  return (
    <Routes>
      {/* Redirect to login by default */}
      <Route path="/" element={<Navigate to="/login" />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes inside Layout */}
      <Route element={<ProtectedRoute> <Layout /> </ProtectedRoute>}>
        <Route path="/userlockpopup" element={<UserLockPopup />} />
        <Route path="/betlockpopup" element={<BetLockPopup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client" element={<Client />} />
        <Route path="/sportanalysis" element={<SportAnalysis />} />
      </Route>
    </Routes>
  );
};

export default App;
