import React, { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiFillDelete,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "../common/icons";
import { CartContext } from "../hooks/useCartDetails";
import productService from "../service/Product.service";

function Cart({ showCart, setShowCart }) {
  const { cartItems, cartItemsInc, cartItemDec, cartItemDelete } =
    useContext(CartContext);

  const handleItemCountInc = (item) => {
    cartItemsInc(item);
  };

  const handleItemCountDec = (item) => {
    cartItemDec(item);
  };

  const handleItemDelete = (item) => {
    cartItemDelete(item);
  };

  const renderCart = () => {
    if (cartItems.length) {
      return (
        <>
          <div className="cart-popup">
            <div className="cart-heading">
              <div className="cart-heading-text">
                <h1>My Cart </h1>
                <span>( {cartItems.length} Items )</span>
              </div>
              <AiOutlineClose
                onClick={() => {
                  setShowCart(false);
                }}
              />
            </div>
            {cartItems.map((item, idx) => (
              <div className="cart-item-section" key={item.id}>
                <div className="cart-item">
                  <img
                    className="cart-item-image"
                    src={`${productService.base_URL}${item.imageURL}`}
                    alt=""
                  />
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-main-section">
                      <div className="cart-item-quantity-section">
                        <AiOutlineMinusCircle
                          className="icon-inc-dec"
                          onClick={() => handleItemCountDec(item)}
                        />
                        <p className="number-of-items">{item.count}</p>
                        <AiOutlinePlusCircle
                          className="icon-inc-dec"
                          onClick={() => handleItemCountInc(item)}
                        />
                        <p className="number-of-items">Rs {item.price}</p>
                      </div>

                      <div className="totalprice-delete">
                        <p>{item.itemTotalPrice}</p>
                        <AiFillDelete
                          className="delete-icon"
                          onClick={() => handleItemDelete(item)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="proceed-to-checkout">
              <h4>Proceed to Checkout</h4>
              <h4>Rs 100 </h4>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <span>No items in cart</span>
          <AiOutlineClose
            onClick={() => {
              setShowCart(false);
            }}
          />
        </>
      );
    }
  };

  return <>{showCart && renderCart()}</>;
}

export default Cart;
