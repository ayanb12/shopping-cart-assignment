import React from "react";
import CartProvider from "../hooks/useCartDetails";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <CartProvider>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
