import React from "react";

export const QuantityBtn = ({ productQty, setProductQty, product }) => {
  const decrementQuantity = () => {
    if (productQty === 1) {
      return;
    }
    setProductQty((prevQty) => prevQty - 1);
  };
  const incrementQuantity = () => {
    if (productQty === product.countInStock) {
      return;
    }
    setProductQty((prevQty) => prevQty + 1);
  };

  return (
    <div className="quantity-btn">
      <img
        alt="arithmetic"
        className="quantity-btn--arithmetic"
        onClick={() => decrementQuantity()}
        src={require("../asset/minus.svg")}
      ></img>
      <div className="quantity-btn--amount">{productQty}</div>
      <img
        alt="arithmetic"
        className="quantity-btn--arithmetic"
        onClick={() => incrementQuantity()}
        src={require("../asset/plus.svg")}
      ></img>
    </div>
  );
};
