import React from "react";
import { useDispatch } from "react-redux";
import CartQtyBtn from "../component/CartQtyBtn";
import { deleteItemFromCart } from "../actions/CartAction";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItemFromCart(item.product));
  };
  return (
    <div className="cart__item__container">
      <div className="cart__item__container--2">
        <img src={item.image} className="cart__item__image"></img>
      </div>
      <div className="cart__item__container--3">
        <div className="cart__item__container--4">
          <div className="cart__item__name">{item.name}</div>
          <img
            onClick={handleDelete}
            src={require("../asset/cross.svg")}
            className="cart__item__delete"
          ></img>
        </div>
        <div className="cart__item__container--5">
          <CartQtyBtn item={item}></CartQtyBtn>
          <div>{item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
