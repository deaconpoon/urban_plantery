import React from "react";

const ProductCard = () => {
  return (
    <div className="product">
      <div className="product__card">
        <img
          className="product__card__image"
          src={require("../asset/new_product.jpg")}
          alt="new-product"
        ></img>
        <div className="product__card__name">plant</div>
        <div className="product__card__price">$100</div>
        <div className="product__card__rating">5 star</div>
      </div>
    </div>
  );
};

export default ProductCard;
