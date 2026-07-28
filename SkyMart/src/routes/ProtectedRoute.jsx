import React from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  let isLogin = JSON.parse(localStorage.getItem("user")) || false;
  
  if (!isLogin) {
    console.log("hey i m running...");
    toast.error("Please Login First");
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;