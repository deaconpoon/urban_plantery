import React from "react";
import logo from "../asset/logo_black.svg";
import menu from "../asset/menu.svg";
import cart from "../asset/cart.svg";

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav__container">
          <button className="nav__container--2">
            <img className="nav__image" src={menu}></img>
          </button>
          <div className="nav__container--3">
            <img alt="logo" className="nav__logo" src={logo}></img>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav__container--4"
          >
            <img className="nav__cart" src={cart}></img>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Nav;
