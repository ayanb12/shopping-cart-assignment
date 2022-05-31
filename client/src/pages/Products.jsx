import React, { useContext, useEffect, useCallback, useState } from "react";
import { NotificationMessage } from "../common/NotificationMessage";
import Sidebar from "../component/Sidebar";
import { CartContext } from "../hooks/useCartDetails";
import ProductService from "../service/Product.service";
import PropTypes from "prop-types";

function Products() {
  const { allProducts, addItems, getAllProducts, isItemAvailable } =
    useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts();
    };
    fetchProducts();
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
                <img
                  src={`${ProductService.base_URL}${item.imageURL}`}
                  alt="Fresho Kiwi"
                  className="product-img"
                />
                <p className="product-descp">{item.description}</p>

                <div className="price-and-buynow">
                  <p className="price">MRP Rs. {item.price}</p>
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
                    Buy Now
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
