import React, { useReducer, createContext } from "react";
import ProductService from "../service/Product.service";

const initialState = {
  allProducts: [],
  cartItems: [],
};

export const CartContext = createContext(initialState);

function cartReducer(state, action) {
  switch (action.type) {
    case "SET_ALL_PRODUCTS":
      return {
        ...state,
        allProducts: action.payload.map((item, idx) => {
          return {
            ...item,
            disable: false,
          };
        }),
      };

    case "ADD_ITEMS":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "ALREADY_ADDED":
      return {
        ...state,
        allProducts: state.allProducts.map((item, idx) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              disable: true,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };

    case "INCREASE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item, idx) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              // count: item.count++,
              // itemTotalPrice: item.price * count,
            };
          } else {
            return {
              ...item,
            };
          }
        }),
      };

    case "DECREASE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map((item, index) => {
          if (item.id === action.payload.id && item.count > 1) {
            return {
              ...item,
              // count: count--,
              // itemTotalPrice: item.price * count,
            };
          } else if (item.id === action.payload.id && item.count === 1) {
            //  when 1 item only
            return {};
          } else {
            return {
              ...item,
            };
          }
        }),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item, index) => {
          return item.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  async function getAllProducts() {
    try {
      let { data } = await ProductService.getAllProducts();
      dispatch({
        type: "SET_ALL_PRODUCTS",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function addItems(item) {
    dispatch({
      type: "ALREADY_ADDED",
      payload: item,
    });
    dispatch({
      type: "ADD_ITEMS",
      payload: item,
    });
  }

  function cartItemsInc(item) {
    let updatedItem = {
      ...item,
      count: 1,
      itemTotalPrice: item.price * this.count,
    };
    dispatch({
      type: "INCREASE_ITEM",
      payload: updatedItem,
    });
  }

  function cartItemDec(item) {
    let updatedItem = {
      ...item,
      count: item.count - 1,
      itemTotalPrice: item.price * this.count,
    };
    dispatch({
      type: "DECREASE_ITEM",
      payload: updatedItem,
    });
  }

  function cartItemDelete(item) {
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems: state.cartItems,
          addItems,
          allProducts: state.allProducts,
          getAllProducts,
          cartItemDelete,
          cartItemsInc,
          cartItemDec,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
