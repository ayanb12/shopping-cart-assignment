import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillCartFill, FiLogOut } from "../common/icons";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { clearStorage } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    clearStorage();
    navigate("/login");
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

            <div className="lower">
              <div className="menu">
                <Link to={`/home`} className="mr-1">
                  Home
                </Link>
                <Link to={`/products`}>Products</Link>
              </div>

              <div className="cart">
                <BsFillCartFill className="cart-icon" />
                Cart
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
