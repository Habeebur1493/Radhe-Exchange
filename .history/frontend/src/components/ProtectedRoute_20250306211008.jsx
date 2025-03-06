import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Check if token exists

  if (!token) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children ? children : <Outlet />; // Render children or outlet
};

export default ProtectedRoute;
