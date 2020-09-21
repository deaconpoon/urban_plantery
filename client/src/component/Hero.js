import React, { Fragment, useRef } from "react";
import arrow from "../asset/next.svg";
import arrowWhite from "../asset/arrow_white.svg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  const scrollToRef = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  const myRef = useRef(null);

  return (
    <Fragment>
      <div className="hero">
        <div>
          <div className="hero__content">
            <p className="hero__content__title">
              topical paradise in the urban jungle.
            </p>
            <div
              onClick={() => history.push("/products")}
              className="hero__content__collection"
            >
              <div className="hero__content__collection--text">
                see our collection
              </div>

              <div className="hero__content__collection--container">
                <img
                  alt="link to shop"
                  className="hero__content__collection--img"
                  src={arrow}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToRef(myRef)}
          className="hero__content__arrow"
        >
          <img
            alt="button to scroll to about section"
            className="hero__content__arrow--img"
            src={arrowWhite}
          ></img>
        </button>
      </div>
      <div ref={myRef}></div>
    </Fragment>
  );
};

export default Hero;
