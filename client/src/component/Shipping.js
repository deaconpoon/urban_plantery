import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShipping } from "../actions/CartAction";
import CheckoutSteps from "../component/CheckoutSteps";

function Shipping(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <body className="section">
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2 className="form__title">Shipping</h2>
              </li>

              <li className="form--entry">
                <label htmlFor="address">Address</label>
                <input
                  className="form--input"
                  type="text"
                  name="address"
                  id="address"
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </li>
              <li className="form--entry">
                <label htmlFor="city">City</label>
                <input
                  className="form--input"
                  type="text"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                ></input>
              </li>
              <li className="form--entry">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  className="form--input"
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  onChange={(e) => setPostalCode(e.target.value)}
                ></input>
              </li>
              <li className="form--entry form--entry--country">
                <label htmlFor="country">Country</label>
                <input
                  className="form--input"
                  type="text"
                  name="country"
                  id="country"
                  onChange={(e) => setCountry(e.target.value)}
                ></input>
              </li>

              <li>
                <button type="submit" className="form__signIn">
                  Continue
                </button>
              </li>
            </ul>
          </form>
        </div>
      </body>
    </div>
  );
}
export default Shipping;
