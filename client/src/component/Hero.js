import React from "react";
import arrow from "../asset/next.svg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  return (
    <div className="hero">
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
            <img className="hero__content__collection--img" src={arrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
