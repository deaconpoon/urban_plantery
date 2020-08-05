import React from "react";

const NewProduct = () => {
  return (
    <div className="new-product">
      <div className="section">
        <h2 className="sub-title">New products</h2>
        <div className="product">
          <div className="product__card">
            <img
              className="product__card__image"
              src={require("../asset/new_product.jpg")}
              alt="new-product"
            ></img>
            <div className="product__card__name">plant</div>
            <div className="product__card__price">$100</div>
          </div>
          <div className="product__card">
            <img
              className="product__card__image"
              src={require("../asset/new_product2.jpg")}
              alt="new-product2"
            ></img>
            <div className="product__card__name">plant</div>
            <div className="product__card__price">$100</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
