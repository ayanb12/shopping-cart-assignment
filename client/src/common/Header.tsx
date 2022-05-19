import { Link } from "react-router-dom";
import { BsFillCartFill } from "./icons.";
import "../assets/styles/style.scss";

const Header = () => {
  return (
    <>
      <nav className="nav px-4">
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
