import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { detailProducts } from "../actions/ProductActions";
import { addToCart } from "../actions/CartAction";
import { QuantityBtn } from "../component/QuantityBtn";

const Product = (props) => {
  const [productQty, setProductQty] = useState(1);
  //render clicked product id. props.match is router object
  /* const product = data.products.find((x) => x._id === props.match.params.id); */
  const productDetail = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetail;

  const productId = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailProducts(productId));

    return () => {};
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(productId, productQty));
  };

  return (
    <section className="section">
      {loading ? (
        <div className="section"></div>
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
            <p>{product.description}</p>
            <div className="product__detail__container--3">
              <div className="product__detail__quantity">Quantity</div>

              <QuantityBtn
                productQty={productQty}
                setProductQty={setProductQty}
                product={product}
              ></QuantityBtn>
            </div>
            {product.countInStock > 0 ? (
              <button
                onClick={handleAddToCart}
                className="product__detail__add"
              >
                Add to Cart
              </button>
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
