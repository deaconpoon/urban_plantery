import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import cross from "../asset/cross.svg";
import SideMenu from "./SideMenu";
import search from "../asset/search.svg";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [expand, setExpand] = useState(false);

  const closeExpand = () => {
    document.querySelector(".menu__body__shop--items").classList.add("hide");
    document
      .querySelector(".menu__body__shop--arrow--img")
      .classList.add("flip");
    setExpand(!expand);
  };
  const openExpand = () => {
    document.querySelector(".menu__body__shop--items").classList.remove("hide");
    document
      .querySelector(".menu__body__shop--arrow--img")
      .classList.remove("flip");
    setExpand(!expand);
  };
  const handleExpand = (e) => {
    e.preventDefault();

    return expand ? openExpand() : closeExpand();
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
              <div className="menu__body__search menu__items">
                <form className="menu__body__search--bar">
                  <input
                    className="menu__body__search--input"
                    type="text"
                    name="searchKeyword"
                    id="search-input"
                    placeholder="Search"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  ></input>
                </form>
                <span className="menu__body__search--icon">
                  <img
                    alt="search"
                    src={search}
                    className="menu__body__search--img"
                  ></img>
                </span>
              </div>
              <div className="menu__items">
                <div className="menu__body__shop" onClick={handleExpand}>
                  <h2 className="menu__body__shop--title">Shop</h2>
                  <div className="menu__body__shop--arrow">
                    <img
                      alt="arrow"
                      src={require("../asset/arrow.svg")}
                      className="menu__body__shop--arrow--img flip"
                    ></img>
                  </div>
                </div>
                <ul className="menu__body__shop--items hide">
                  <SideMenu></SideMenu>
                </ul>
              </div>
              <h2 className="menu__items">About</h2>
              <h2 className="menu__items">Contact</h2>
            </div>
          </div>
        </session>
      </CSSTransition>
    </div>
  );
};
export default Menu;
