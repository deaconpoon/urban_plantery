import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "./Menu";

import logo from "../asset/logo_black.svg";
import menuLogo from "../asset/menu.svg";
import cart from "../asset/cart.svg";

const Nav = ({ isOpen, setIsOpen, menuOpen, setMenuOpen }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="nav__block">
      <header className="header">
        <div className="nav">
          <div className="nav__container">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav__container--2"
            >
              <img className="nav__image" src={menuLogo}></img>
            </button>
            <div className="nav__container--3">
              <img
                onClick={handleClick}
                alt="logo"
                className="nav__logo"
                src={logo}
              ></img>
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
    </div>
  );
};
export default Nav;
