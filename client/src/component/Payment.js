import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { savePayment } from "../actions/CartAction";
import CheckoutSteps from "../component/CheckoutSteps";

function Payment(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <body className="section">
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2 className="form__title">Payment</h2>
              </li>

              <li>
                <div className="form--paypal">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    value="paypal"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></input>
                  <label for="paymentMethod">Paypal</label>
                </div>
              </li>

              <li onClick={submitHandler} className="form__signIn">
                <button type="submit" className="button primary">
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
export default Payment;
