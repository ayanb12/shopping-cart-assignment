import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import { CartContext } from "../hooks/useCartDetails";
import ProductService from "../service/Product.service";

function Products() {
  const { allProducts, addItems, getAllProducts, cartItems } =
    useContext(CartContext);
  // console.log(cartItems);

  useEffect(() => {
    (async function getProducts() {
      await getAllProducts();
    })();
  }, []);

  const handleClick = (item) => {
    addItems(item);
  };

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
                    onClick={() => handleClick(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1>loading...</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
