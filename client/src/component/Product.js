import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailProducts } from "../actions/ProductActions";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  //render clicked product id. props.match is router object
  /* const product = data.products.find((x) => x._id === props.match.params.id); */
  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailProducts(props.match.params.id));

    return () => {};
  }, []);

  const decrementQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const incrementQuantity = () => {
    if (quantity === product.countInStock) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCard = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + quantity);
  };

  return (
    <section className="section">
      {loading ? (
        <div>Loading... </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="product__detail">
          <div className="product__detail__container">
            <img
              className="product__detail__image"
              alt="product"
              src={product.image}
            ></img>
          </div>
          <div className="product__detail__container--2">
            <div className="product__detail__name">{product.name}</div>
            <div className="product__detail__price">$ {product.price}</div>
            <div className="product__detail__container--3">
              <div className="product__detail__quantity">Quantity</div>
              <div className="quantity-btn">
                <img
                  alt="arithmetic"
                  className="quantity-btn--arithmetic "
                  onClick={() => decrementQuantity()}
                  src={require("../asset/minus.svg")}
                ></img>
                <div className="quantity-btn--amount">{quantity}</div>
                <img
                  alt="arithmetic"
                  className="quantity-btn--arithmetic"
                  onClick={() => incrementQuantity()}
                  src={require("../asset/plus.svg")}
                ></img>
              </div>
            </div>
            {product.countInStock > 0 ? (
              <div onClick={handleAddToCard} className="product__detail__add">
                Add to Cart
              </div>
            ) : (
              <div>Out of Stock</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Product;
