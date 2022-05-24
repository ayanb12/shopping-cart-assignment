import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PublicRoutes = () => {
  const { isLoggedin } = useAuth();
  return isLoggedin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
