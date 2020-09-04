import React, { useState, useEffect } from "react";

import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import CartItem from "../component/CartItem";
import { logout } from "../actions/UserActions";
import cross from "../asset/cross.svg";

const Cart = ({ isOpen, setIsOpen, props }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const dispatch = useDispatch();

  const handleCheckOut = () => {
    props.history.push("/signin?redirect=shipping");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

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
                {userInfo ? (
                  <div className="cart__signin" onClick={handleLogout}>
                    Logout
                  </div>
                ) : (
                  <Link to="/signin">Sign in</Link>
                )}
                <div className="cart__title">Urban Plantery</div>
                <div className="cart__container--2">
                  {cartItems.length === 0 ? (
                    <div>Cart is empty </div>
                  ) : (
                    cartItems.map((item) => <CartItem item={item}></CartItem>)
                  )}
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
                  <div className="cart__body__total--amount">
                    $ {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </div>
                </div>
                <div className="cart__body__checkout">
                  <Link
                    to="/signin?redirect=shipping"
                    className="cart__body__checkout--btn"
                    onClick={() => setIsOpen(false)}
                  >
                    CHECK OUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </session>
      </CSSTransition>
    </div>
  );
};

export default withRouter(Cart);
