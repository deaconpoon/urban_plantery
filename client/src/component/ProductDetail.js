import React, { useState } from "react";
import data from "./Data";

const ProductDetail = (props) => {
  const [quantity, setQuantity] = useState(0);
  //render clicked product id. props.match is router object
  const product = data.products.find((x) => x._id === props.match.params.id);

  const decrementQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <section className="section">
      <div className="product__detail">
        <div className="product__detail__container">
          <img
            src={product.image}
            className="product__detail__image"
            alt="product"
          ></img>
        </div>
        <div className="product__detail__container--2">
          <div className="product__detail__name">{product.name}</div>
          <div className="product__detail__price">$ {product.price}</div>
          <div className="product__detail__container--3">
            <div className="product__detail__quantity">Quantity</div>
            <div className="product__detail__container--4">
              <img
                className="product__detail__arithmetic "
                onClick={() => decrementQuantity()}
                src={require("../asset/minus.svg")}
              ></img>
              <div className="product__detail__amount">{quantity}</div>
              <img
                className="product__detail__arithmetic"
                onClick={() => incrementQuantity()}
                src={require("../asset/plus.svg")}
              ></img>
            </div>
          </div>
          <div className="product__detail__add">Add to Cart</div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
