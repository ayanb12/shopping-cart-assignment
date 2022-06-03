import React, { useContext, useEffect, useState } from "react";
import { NotificationMessage } from "../common/NotificationMessage";
import Sidebar from "../component/Sidebar";
import { CartContext } from "../hooks/useCartDetails";
import ProductService from "../service/Product.service";
import PropTypes from "prop-types";

function Products() {
  const { allProducts, addItems, getAllProducts, isItemAvailable } =
    useContext(CartContext);

  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts();
    };
    fetchProducts();
  }, []);

  const printwidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", printwidth);
    return () => {
      window.removeEventListener("resize", printwidth);
    };
  }, []);

  return (
    <>
      <div className="sidebar-and-products">
        <div className="sidebar p-1">
          <Sidebar />
        </div>

        <div className="product-container">
          {allProducts.length ? (
            allProducts.map((item, index) => (
              <div className="product-card" key={item.id}>
                <h4 className="product-header">{item.name}</h4>

                <div className={windowWidth ? "img-descp" : ""}>
                  <img
                    src={`${ProductService.base_URL}${item.imageURL}`}
                    alt={item.name}
                    className="product-img"
                  />
                  <p className="product-descp">{item.description}</p>
                </div>

                <div className="price-and-buynow">
                  {windowWidth >= 768 ? (
                    <p className="price">MRP Rs. {item.price}</p>
                  ) : null}

                  <button
                    disabled={item.disable}
                    className={`buynow btn-primary ${
                      item.disable && "btn-disable"
                    }`}
                    onClick={() => {
                      addItems(item);
                      NotificationMessage("success", "Added to Cart");
                    }}
                  >
                    Buy Now {windowWidth <= 768 ? `@Rs ${item.price}` : null}
                  </button>
                </div>
              </div>
            ))
          ) : isItemAvailable ? (
            <h1>loading...</h1>
          ) : (
            <h1>Items not Available</h1>
          )}
        </div>
      </div>
    </>
  );
}

Products.propTypes = {
  getAllProducts: PropTypes.func,
};
export default Products;
