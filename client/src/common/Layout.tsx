import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: Required<IProps>) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
