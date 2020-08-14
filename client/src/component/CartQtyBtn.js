import React from "react";

const CartQtyBtn = () => {
  return (
    <div className="cart__item__quantity-btn">
      <img
        alt="arithmetic"
        className="cart__item__quantity-btn--arithmetic"
        onClick={() => decrementQuantity()}
        src={require("../asset/minus.svg")}
      ></img>
      <div className="quantity-btn--amount">{productQty}</div>
      <img
        alt="arithmetic"
        className="cart__item__quantity-btn--arithmetic"
        onClick={() => incrementQuantity()}
        src={require("../asset/plus.svg")}
      ></img>
    </div>
  );
};

export default CartQtyBtn;
