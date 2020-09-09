import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { listProducts } from "../actions/ProductActions";

const SideMenu = () => {
  /*   const productList = useSelector((state) => state.productList);
  const { products } = productList;
 */
  const [productsCategory, setProductsCategory] = useState([]);

  const renderProducts = async () => {
    const response = await axios.get("/api/products");

    const products = response.data
      .reduce((a, c) => {
        if (!a.includes(c.category)) {
          a.push(c.category);
          return a;
        } else {
          return a;
        }
      }, [])
      .sort();

    setProductsCategory(products);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <Fragment>
      <li key="genus" className="shop__aside__list__item">
        <Link to={"/products"}>All</Link>
      </li>
      {productsCategory.map((product) => (
        <li key="genus" className="shop__aside__list__item">
          <Link to={"/category/" + product}>{product}</Link>
        </li>
      ))}
    </Fragment>
  );
};

export default SideMenu;
