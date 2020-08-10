import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <li className="product">
      <div className="product__card">
        <img
          className="product__card__image"
          src={product.image}
          alt="new-product"
        ></img>
        <div className="product__card__name">
          <Link to={"/product/" + product._id}>{product.name}</Link>
        </div>
        <div className="product__card__price">${product.price}</div>
        {/*    <div className="product__card__rating">{product.rating}</div> */}
      </div>
    </li>
  );
};

export default ProductCard;
