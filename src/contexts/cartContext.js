import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const cartContext = createContext();

const INIT_STATE = {
  cart: null,
  count: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        // count: action.payload.shoes.length,
      };
    default:
      return state;
  }
}
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!Add to cart
  function addToCart(shoe) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        shoes: [],
        totalPrice: 0,
      };
    }
    let newShoe = {
      item: shoe,
      count: 1,
      subPrice: shoe.price,
    };
    const isShoeInCart = cart.shoes.some(
      item => item.item.id === newShoe.item.id
    );

    if (isShoeInCart) {
      cart.shoe = cart.shoes.filter(item => item.item.id !== newShoe.item.id);
    } else {
      cart.shoes.push(newShoe);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  //! Get Cart
  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        shoes: [],
        totalPrice: 0,
      };
    }
    // console.log(cart);
    cart.totalPrice = cart.shoes.reduce((prev, curr) => {
      return prev + curr.subPrice;
    }, 0);
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  //! Delete
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        shoes: [],
        totalPrice: 0,
      };
    }
    cart.shoes = cart.shoes.filter(item => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function changeCount(count, id) {
    if (count <= 0) {
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.shoes = cart.shoes.map(item => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = count * item.item.price;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkShoeInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        shoes: [],
        totalPrice: 0,
      };
    }
    const isShoeInCart = cart.shoes.some(item => item.item.id === id);
    return isShoeInCart;
  }
  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        count: state.count,
        getCart,
        addToCart,
        deleteFromCart,
        changeCount,
        checkShoeInCart,
      }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
