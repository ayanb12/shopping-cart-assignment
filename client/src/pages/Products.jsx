import React from "react";
import Sidebar from "../component/Sidebar";

function Products() {
  return (
    <>
      <div className="sidebar-and-products">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="product-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
            (item, index) => (
              <div className="product-card" key={item}>
                <h4 className="product-header">Fresho Kiwi - Green, 3 pcs</h4>
                <img
                  src={require("../assets/images/products/fruit-n-veg/kiwi-green.jpg")}
                  alt="Fresho Kiwi"
                  className="product-img"
                />
                <p className="product-descp">
                  Kiwis are oval shaped with a brownish outer skin. The flesh is
                  bright green and juicy with tiny, edible black seeds.
                </p>

                <div className="price-and-buynow">
                  <p className="price">MRP Rs.87</p>
                  <button className="buynow btn-primary">Buy Now</button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
