import React, { useContext, useEffect, useCallback, useState } from "react";
import { NotificationMessage } from "../common/NotificationMessage";
import Sidebar from "../component/Sidebar";
import { CartContext } from "../hooks/useCartDetails";
import ProductService from "../service/Product.service";

function Products() {
  const { allProducts, addItems, getAllProducts, isItemAvailable } =
    useContext(CartContext);

  // const [selectedCategory, setSeletedCategory] = useState("all_categories");

  // console.log(allProducts);

  const getProducts = useCallback(async () => {
    await getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    getProducts();
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
                    onClick={() => {
                      handleClick(item);
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

export default Products;
