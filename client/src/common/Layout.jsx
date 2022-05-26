import React from "react";
import CartProvider from "../hooks/useCartDetails";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <>
      <CartProvider>
        <Header />
        <div className="container">{children}</div>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </>
  );
};

export default Layout;
