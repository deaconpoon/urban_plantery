import React from "react";
import logo_black from "../asset/logo_black.svg";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <footer className="footer__margin">
      <div className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <img
              alt="logo"
              className="footer__logo--image"
              src={logo_black}
              onClick={handleClick}
            ></img>
          </div>
          <div className="footer__links">
            <Link to="/" className="footer__link footer__links--1">
              Home
            </Link>
            <Link to="/about" className="footer__link  footer__links--2">
              About
            </Link>
            <Link to="/products" className="footer__link  footer__links--3">
              Shop
            </Link>
            <Link to="/contact" className="footer__link  footer__links--4">
              Contact
            </Link>
          </div>
        </div>
        <div className="footer__copyright">© 2020 Urban Plantery</div>
      </div>
    </footer>
  );
};

export default Footer;
