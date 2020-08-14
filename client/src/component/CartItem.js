import React from "react";
import { QuantityBtn } from "../component/QuantityBtn";

const CartItem = ({ item }) => {
  const btnStyling = "cart__item__quantity-btn";
  const arithmeticStyling = "cart__item__quantity-btn--arithmetic";

  return (
    <div className="cart__item__container">
      <div className="cart__item__container--2">
        <img src={item.image} className="cart__item__image"></img>
      </div>
      <div className="cart__item__container--3">
        <div className="cart__item__container--4">
          <div className="cart__item__name">{item.name}</div>
          <img
            src={require("../asset/cross.svg")}
            className="cart__item__delete"
          ></img>
        </div>
        <div className="cart__item__container--5">
          <QuantityBtn
            quantity={item.quantity}
            btnStyling={btnStyling}
            arithmeticStyling={arithmeticStyling}
          ></QuantityBtn>
          <div>$100</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
