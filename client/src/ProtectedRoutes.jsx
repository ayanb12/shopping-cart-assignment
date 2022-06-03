import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ProtectedRoutes = () => {
  const { isLoggedin } = useAuth();

  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
