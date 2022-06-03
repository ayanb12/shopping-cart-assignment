import React, { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiFillDelete,
  AiOutlinePlus,
  AiOutlineMinus,
} from "../common/icons";
import { CartContext } from "../hooks/useCartDetails";
import productService from "../service/Product.service";
import { useNavigate } from "react-router-dom";

function Cart({ showCart, setShowCart }) {
  const navigate = useNavigate();
  const {
    cartItems,
    cartItemsInc,
    cartItemDec,
    cartItemDelete,
    cartTotalPrice,
  } = useContext(CartContext);

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
          {cartItems.length ? (
            cartItems.map((item, idx) => (
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
                        <AiOutlineMinus
                          className="icon-inc-dec"
                          onClick={() => handleItemCountDec(item)}
                        />
                        <p className="number-of-items">{item.count}</p>

                        <AiOutlinePlus
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
            ))
          ) : (
            <div className="empty-cart-msg">
              No products in cart 👜
              <p>Your favourite items are just a click away</p>
            </div>
          )}
          <div
            className="proceed-to-checkout p-1"
            style={{
              justifyContent: cartItems.length ? "space-between" : null,
            }}
          >
            <p>Promo code can be applied on payment page</p>
            <div className="btn btn-primary">
              {cartItems.length ? (
                <>
                  <h4>Proceed to Checkout</h4>
                  <h4>{cartTotalPrice}</h4>
                </>
              ) : (
                <h4
                  className="empty-cart"
                  onClick={() => {
                    navigate("/products");
                    setShowCart(false);
                  }}
                >
                  Start Shopping
                </h4>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{showCart && renderCart()}</>;
}

export default Cart;
