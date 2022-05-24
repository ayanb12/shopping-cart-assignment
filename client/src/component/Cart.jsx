import React, { useState } from "react";
import {
  AiOutlineClose,
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "../common/icons";

function Cart({ showCart, setShowCart }) {
  const [itemCounter, setItemCounter] = useState(1);
  return (
    <>
      {showCart && (
        <div className="cart-popup">
          <div className="cart-heading">
            <div className="cart-heading-text">
              <h1>My Cart </h1>
              <span>(0 items)</span>
            </div>
            <AiOutlineClose
              onClick={() => {
                setShowCart(false);
              }}
            />
          </div>
          <div className="cart-item-section">
            <div className="cart-item">
              <img
                className="cart-item-image"
                src={require("../assets/images/category/fruits.png")}
                alt=""
              />
              <div className="cart-item-info">
                <div className="cart-item-name">Mix Fruits, 1Kg</div>
                <div className="cart-item-main-section">
                  <div className="cart-item-quantity-section">
                    <AiOutlineMinusCircle />
                    <p className="number-of-items">{itemCounter}</p>
                    <AiOutlinePlusCircle />
                    <p className="number-of-items">Rs 100</p>
                  </div>

                  <div className="totalprice-delete">
                    <p>Rs 100</p>
                    <AiFillDelete className="delete-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="proceed-to-checkout">
            <h4>Proceed to Checkout</h4>
            <h4>Rs 100 </h4>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
