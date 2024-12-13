import React from "react";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default AuthGuard;
