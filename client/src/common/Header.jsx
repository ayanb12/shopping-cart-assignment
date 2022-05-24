import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "../common/icons";
import "../assets/styles/style.scss";
import Cart from "../component/Cart";
import Modal from "react-modal";

Modal.setAppElement("#root");

const modalCustomStyles = {
  content: {
    top: "15%",
    left: "70%",
    right: "auto",
    bottom: "auto",
    marginRight: "-70%",
    marginBottom: "-15%",
    height: "75vh",
    padding: "0",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, .75)",
  },
};

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <nav className="nav px-3 mb-1">
        <img
          src={require("../assets/images/logo.png")}
          alt="E-Commerce app logo"
          className="logo"
        />
        <div>
          <div className="nav-content pl-2">
            <div className="upper">
              <Link to={`/login`} className="mr-1">
                Signin
              </Link>
              <Link to={`/register`}>Register</Link>
            </div>

            <div className="lower">
              <div className="menu">
                <Link to={`/`} className="mr-1">
                  Home
                </Link>
                <Link to={`/products`}>Products</Link>
              </div>

              <div className="cart" onClick={() => setShowCart(!showCart)}>
                <BsFillCartFill className="cart-icon" />
                Cart
              </div>
              <Modal isOpen={showCart} style={modalCustomStyles}>
                <Cart showCart={showCart} setShowCart={setShowCart} />
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
