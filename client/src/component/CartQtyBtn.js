import React from "react";
import { useDispatch } from "react-redux";

import { removeFromCart, addToCart } from "../actions/CartAction";

const CartQtyBtn = ({ item }) => {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(addToCart(item.product, 1));
  };
  const decrement = () => {
    dispatch(removeFromCart(item.product, 1));
  };
  return (
    <div className="cart__item__quantity-btn">
      <img
        onClick={decrement}
        alt="arithmetic"
        className="cart__item__quantity-btn--arithmetic"
        src={require("../asset/minus.svg")}
      ></img>
      <div className="quantity-btn--amount">{item.quantity}</div>
      <img
        onClick={increment}
        alt="arithmetic"
        className="cart__item__quantity-btn--arithmetic"
        src={require("../asset/plus.svg")}
      ></img>
    </div>
  );
};

export default CartQtyBtn;
