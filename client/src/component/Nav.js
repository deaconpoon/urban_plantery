import React from "react";
import logo from "../asset/logo_black.svg";

const Nav = () => {
  return (
    <header className="main-nav">
      <div className="main-nav__logo">
        <img className="main-nav__logo-img" src={logo}></img>
      </div>
      <div className="main-nav__container">
        <span className="main-nav__container--link">COLLECTION</span>
        <span className="main-nav__container--link">CONTACT</span>
      </div>
    </header>
  );
};
export default Nav;
