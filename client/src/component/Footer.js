import React from "react";
import logo_black from "../asset/logo_black.svg";

const Footer = () => {
  return (
    <footer className="section">
      <div className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <img
              alt="logo"
              className="footer__logo--image"
              src={logo_black}
            ></img>
          </div>
          <div className="footer__links">
            <div className="footer__link footer__links--1">Shop</div>
            <div className="footer__link  footer__links--2">About</div>
            <div className="footer__link  footer__links--3">Contact</div>
            <div className="footer__link  footer__links--4">Home</div>
          </div>
        </div>
        <div className="footer__copyright">© 2020 Urban Plantery</div>
      </div>
    </footer>
  );
};

export default Footer;
