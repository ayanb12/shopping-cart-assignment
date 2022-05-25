import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import InnerContent from "./common/InnerContent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      {/* For Protected routes */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<InnerContent />}>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />

          <Route path="/products" element={<Products />} />
        </Route>
      </Route>

      {/* For Public routes */}
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
