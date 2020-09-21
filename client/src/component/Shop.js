import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { listProducts } from "../actions/ProductActions";
import ProductCard from "./ProductCard";
import SideMenu from "./SideMenu";

const Shop = (props) => {
  const [filtered, setFiltered] = useState(false);
  const [categorySet, setCategorySet] = useState(null);

  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const searchStr = props.location.search;
  const searchKeyword = searchStr
    ? searchStr.slice(searchStr.indexOf("=") + 1, searchStr.length)
    : searchStr;

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(category, searchKeyword));
  }, [category || searchKeyword]);

  const openFilter = () => {
    document.querySelector(".shop__aside__list").classList.add("hide");
    document
      .querySelector(".shop__aside__filter--arrow--img")
      .classList.add("flip");
    setFiltered(!filtered);
  };
  const closeFilter = () => {
    document.querySelector(".shop__aside__list").classList.remove("hide");
    document
      .querySelector(".shop__aside__filter--arrow--img")
      .classList.remove("flip");
    setFiltered(!filtered);
  };
  const handleFilter = (e) => {
    e.preventDefault();

    return filtered ? closeFilter() : openFilter();
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, sortOrder));
  };

  return (
    <div className="section">
      <div className="shop">
        <section className="shop__header">
          <div className="shop__header__container">
            <div className="shop__header__title">
              Shop for your favorite plant
            </div>
            <div className="shop__header__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <div className="shop__header__container--2">
            {/*  <div className="shop__header__container--3">
              <label htmlFor="sortOrder" className="shop__header__sort">
                Sort by
              </label>
              <select
                name="sortOrder"
                className="shop__header__select"
                id="sortOrder"
                onChange={sortHandler}
              >
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </div> */}
          </div>
        </section>
        <div className="shop__body__container">
          <aside className="shop__aside">
            <div className="shop__aside__container " onClick={handleFilter}>
              <div className="shop__aside__filter transition">Filter</div>
              <div className="shop__aside__filter--arrow transition">
                <img
                  alt="arrow"
                  src={require("../asset/arrow.svg")}
                  className="shop__aside__filter--arrow--img"
                ></img>
              </div>
            </div>

            <ul className="shop__aside__list">
              <SideMenu></SideMenu>
            </ul>
          </aside>
          <section className="shop__section">
            {products.map((product) => (
              <ProductCard product={product}></ProductCard>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop;
