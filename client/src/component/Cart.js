import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({ isOpen, setIsOpen }) => {
  /* const cart = userSelector((state) => state.cart);
  const { cartItems } = cart; */

  const [quantity, setQuantity] = useState(1);

  /*   const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const incrementQuantity = () => {
    if (quantity === product.countInStock) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + 1);
  }; */

  return (
    <div>
      <CSSTransition classNames="fade" in={isOpen} appear={isOpen}>
        <div className="overlay"></div>
      </CSSTransition>
      <CSSTransition classNames="translate-left" in={isOpen}>
        <session className="cart">
          <div className="cart__container">
            <div className="cart__title">Urban Plantery</div>
            <div className="cart__container--2">
              <div className="cart__item__container">
                <div className="cart__item__container--2">
                  <img
                    src="../asset/product/plant_1.jpg"
                    className="cart__item__image"
                  ></img>
                </div>
                <div className="cart__item__container--3">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="cart__item__container--4"
                  >
                    <div className="cart__item__name">Pothos</div>
                    <img
                      src={require("../asset/cross.svg")}
                      className="cart__item__delete"
                    ></img>
                  </div>
                  <div className="cart__item__container--5">
                    <div className="quantity-btn">
                      <img
                        alt="arithmetic"
                        className="quantity-btn--arithmetic "
                        src={require("../asset/minus.svg")}
                      ></img>
                      <div className="quantity-btn--amount">{quantity}</div>
                      <img
                        alt="arithmetic"
                        className="quantity-btn--arithmetic"
                        src={require("../asset/plus.svg")}
                      ></img>
                    </div>
                    <div>$100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </session>
      </CSSTransition>
    </div>
  );
};

export default Cart;
