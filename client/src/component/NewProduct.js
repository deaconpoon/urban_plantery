import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { listProducts } from "../actions/ProductActions";
import { useDispatch } from "react-redux";

const NewProduct = () => {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  console.log(products);
  return (
    <div className="new-product">
      <div className="section">
        <h2 className="sub-title">New products</h2>
        <ul className="products">
          {products.slice(0, 3).map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewProduct;
