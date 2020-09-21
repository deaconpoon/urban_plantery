import React from "react";
import { useDispatch } from "react-redux";
import CartQtyBtn from "../component/CartQtyBtn";
import { deleteItemFromCart } from "../actions/CartAction";
import { useHistory } from "react-router";

const CartItem = ({ item, isOpen, setIsOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItemFromCart(item.product));
  };
  const handleClick = (name) => {
    history.push(`/products/${name}`);
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart__item__container">
      <div className="cart__item__container--2">
        <img
          alt="product-image"
          onClick={() => handleClick(item.product)}
          src={item.image}
          className="cart__item__image"
        ></img>
      </div>
      <div className="cart__item__container--3">
        <div className="cart__item__container--4">
          <div className="cart__item__name">{item.name}</div>
          <img
            alt="delete-button"
            onClick={handleDelete}
            src={require("../asset/cross.svg")}
            className="cart__item__delete"
          ></img>
        </div>
        <div className="cart__item__container--5">
          <CartQtyBtn item={item}></CartQtyBtn>
          <div>$ {item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
