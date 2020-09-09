import React from "react";

const Newsletter = () => {
  return (
    <div className="section">
      <div className="newsletter">
        <div className="newsletter__title">Newsletter</div>
        <div className="newsletter__offer">
          Receive special offers and first look at new products.
        </div>
        <div className="newsletter__container__email">
          <form className="newsletter__container__email__form">
            <input
              type="text"
              name="email"
              id="email-input"
              placeholder="Enter Email"
              className="newsletter__container__email__form--input"
            ></input>

            <div
              htmlFor="email"
              className="newsletter__container__email__form--button"
            >
              Subscribe
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
