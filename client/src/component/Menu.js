import React from "react";
import { CSSTransition } from "react-transition-group";
import cross from "../asset/cross.svg";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      <CSSTransition classNames="fade" in={menuOpen} appear={menuOpen}>
        <div className="overlay" onClick={() => setMenuOpen(!menuOpen)}></div>
      </CSSTransition>
      <CSSTransition classNames="translate-right" in={menuOpen}>
        <session className="menu">
          <header className="menu__header">
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu__header__container--2"
            >
              <img
                className="menu__header__cross"
                src={cross}
                alt="cross-btn"
              ></img>
            </div>
            <div className="menu__header__container"></div>
          </header>
          <div className="menu__body__wrapper">
            <div className="menu__body">
              <div className="menu__body__container">
                <h2 className="menu__body__search">Search</h2>
                <div className="menu__body__search--arrow">
                  <img
                    alt="arrow"
                    src={require("../asset/arrow.svg")}
                    className="menu__body__search--arrow--img"
                  ></img>
                </div>
              </div>
              <h2>Shop</h2>
              <h2>About</h2>
              <h2>Contact</h2>
            </div>
          </div>
        </session>
      </CSSTransition>
    </div>
  );
};
export default Menu;
