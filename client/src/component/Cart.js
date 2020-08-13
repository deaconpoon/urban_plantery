import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";

import cross from "../asset/cross.svg";

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
            <header className="cart__header">
              <div className="cart__header__container">
                Free Shipping for All Location!
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cart__header__container--2"
              >
                <img
                  className="cart__header__cross"
                  src={cross}
                  alt="cross-btn"
                ></img>
              </div>
            </header>
            <div className="cart__body">
              <div className="cart__body__container">
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
                        <div className="cart__item__quantity-btn">
                          <img
                            alt="arithmetic"
                            className="cart__item__quantity-btn--arithmetic "
                            src={require("../asset/minus.svg")}
                          ></img>
                          <div className="cart__item__quantity-btn--amount">
                            {quantity}
                          </div>
                          <img
                            alt="arithmetic"
                            className="cart__item__quantity-btn--arithmetic"
                            src={require("../asset/plus.svg")}
                          ></img>
                        </div>
                        <div>$100</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart__body__container--2">
                <div className="cart__body__items">
                  <div className="cart__body__items--text">Items</div>
                  <div className="cart__body__items--amount">$100</div>
                </div>
                <div className="cart__body__shipping">
                  <div className="cart__body__shipping--text">Shipping</div>
                  <div className="cart__body__shipping--amount">Free</div>
                </div>
                <div className="cart__body__total">
                  <div className="cart__body__total--text">Total</div>
                  <div className="cart__body__total--amount">$100</div>
                </div>
                <div className="cart__body__checkout">
                  <button className="cart__body__checkout--btn">
                    CHECK OUT
                  </button>
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
