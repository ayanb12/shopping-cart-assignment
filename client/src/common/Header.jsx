import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BsFillCartFill,
  FiLogOut,
  AiOutlineMenu,
  AiOutlineClose,
} from "../common/icons";
import useAuth from "../hooks/useAuth";
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
  const [isBarOpened, setIsBarOpened] = useState("inactive");
  const { clearStorage } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    clearStorage();
    navigate("/login");
  };

  const handleBarClosed = () => {
    preventScroll();
  };

  const preventScroll = () => {
    setIsBarOpened((prevState) =>
      prevState === "active" ? "inactive" : "active"
    );
    if (isBarOpened === "active") {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
    return isBarOpened;
  };

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
              {location.pathname !== "/login" &&
                location.pathname !== "/register" && (
                  <div className="logout" onClick={handleLogout}>
                    Logout <FiLogOut style={{ marginLeft: "0.5rem" }} />
                  </div>
                )}

              {(location.pathname === "/login" ||
                location.pathname === "/register") && (
                <>
                  <Link to={`/login`} className="mr-1">
                    Signin
                  </Link>
                  <Link to={`/register`}>Register</Link>
                </>
              )}
            </div>

            {location.pathname === "/login" ||
            location.pathname === "/register" ? null : (
              <div className="lower">
                <div className={`menu-items mobile-${isBarOpened}`}>
                  <AiOutlineClose
                    className="sidebar-close-icon"
                    onClick={() => preventScroll()}
                  />
                  <Link
                    to={`/home`}
                    className="links mr-1"
                    onClick={handleBarClosed}
                  >
                    Home
                  </Link>
                  <Link
                    to={`/products`}
                    className="links"
                    onClick={handleBarClosed}
                  >
                    Products
                  </Link>
                  <Link
                    to={`/login`}
                    className="links mobile-logout"
                    onClick={() => {
                      handleBarClosed();
                      handleLogout();
                    }}
                  >
                    Logout
                  </Link>
                </div>

                <div className="menu-bar">
                  <AiOutlineMenu onClick={() => preventScroll()} />
                </div>

                <div className="cart" onClick={() => setShowCart(!showCart)}>
                  <BsFillCartFill className="cart-icon" />
                  Cart
                </div>
                <Modal isOpen={showCart} style={modalCustomStyles}>
                  <Cart showCart={showCart} setShowCart={setShowCart} />
                </Modal>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
