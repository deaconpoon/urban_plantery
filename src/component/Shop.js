import React, { useState } from "react";
import data from "./Data";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [filtered, setFiltered] = useState(false);

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

  return (
    <div className="section">
      <div className="shop">
        <section className="shop__header">
          <div className="shop__header__container">
            <div className="shop__header__title">Pet Friendly Plants</div>
            <div className="shop__header__text">
              Make sure your pet don't yo plants Make sure your pet don't yo
              plantsMake sure your pet don't yo plants
            </div>
          </div>
          <div className="shop__header__container--2">
            <label htmlFor="item-sort" className="shop__header__sort">
              Sort by
            </label>
            <select className="shop__header__select" id="item-sort">
              <option value="bestseller"></option>
              <option value="highest">highest</option>
              <option value="lowest">lowest</option>
            </select>
          </div>
        </section>
        <div className="shop__body__container">
          <aside className="shop__aside">
            <div className="shop__aside__container " onClick={handleFilter}>
              <div className="shop__aside__filter transition">Filter</div>
              <div className="shop__aside__filter--arrow transition">
                <img
                  src={require("../asset/arrow.svg")}
                  className="shop__aside__filter--arrow--img"
                ></img>
              </div>
            </div>
            <ul className="shop__aside__list">
              <li className="shop__aside__list__item">All</li>
              <li className="shop__aside__list__item">Calathea</li>
              <li className="shop__aside__list__item">Pothos</li>
              <li className="shop__aside__list__item">Monstera</li>
            </ul>
          </aside>
          <section className="shop__section">
            {data.products.map((product) => (
              <ProductCard product={product}></ProductCard>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop;
