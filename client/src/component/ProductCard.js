import React from "react";
import { Link, useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <li key={product._id} className="product">
      <div className="product__card">
        <Link to={"/products/" + product._id}>
          <img
            className="product__card__image"
            src={product.image}
            alt="new-product"
          ></img>
        </Link>
        <div className="product__card__name">
          <Link to={"/products/" + product._id}>{product.name}</Link>
        </div>
        <div className="product__card__price">${product.price}</div>
        {/*    <div className="product__card__rating">{product.rating}</div> */}
      </div>
    </li>
  );
};

export default ProductCard;
