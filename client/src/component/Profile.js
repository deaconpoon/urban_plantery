import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout, update } from "../actions/UserActions";
import { listMyOrders } from "../actions/OrderActions";
import { useDispatch, useSelector } from "react-redux";
import OrdersAdmin from "./OrdersAdmin";
import ProductsAdmin from "./ProductsAdmin";

function Profile(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [tab, setTab] = useState("orders");
  const dispatch = useDispatch();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;

  const handleTab = () => {
    const orders = document.querySelector(".profile__aside--orders");
    const products = document.querySelector(".profile__aside--products");

    if (tab == "products") {
      products.classList.remove("underline");
      setTab("orders");
      orders.classList.add("underline");
    } else {
      orders.classList.remove("underline");
      setTab("products");
      products.classList.add("underline");
    }
  };

  //Set default signed in user info
  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => {};
  }, [userInfo]);

  return (
    <div className="profile">
      <body className="section">
        <div className="profile__logout">
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="profile__container">
          <aside className="profile__aside">
            <button
              className="profile__aside--orders underline"
              onClick={handleTab}
            >
              Orders
            </button>
            <button className="profile__aside--products" onClick={handleTab}>
              Products
            </button>
          </aside>

          {tab == "orders" ? (
            <div className="order__container">
              <div className="profile-info">
                <div className="form">
                  <form onSubmit={submitHandler}>
                    <div className="form__profile__container">
                      <li>
                        <h2 className="form__title">User Profile</h2>
                      </li>
                      <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                        {success && <div>Profile Saved Successfully.</div>}
                      </li>
                      <li className="form--entry">
                        <label htmlFor="name">Name</label>
                        <input
                          className="form--input"
                          value={name}
                          type="name"
                          name="name"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                        ></input>
                      </li>
                      <li className="form--entry">
                        <label htmlFor="email">Email</label>
                        <input
                          className="form--input"
                          value={email}
                          type="email"
                          name="email"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </li>
                      <li className="form--entry">
                        <label htmlFor="password">Password</label>
                        <input
                          className="form--input"
                          value={password}
                          type="password"
                          id="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        ></input>
                      </li>

                      <li>
                        <button type="submit" className="form__signIn">
                          Update
                        </button>
                      </li>
                    </div>
                  </form>
                </div>
              </div>
              <OrdersAdmin></OrdersAdmin>
            </div>
          ) : (
            <div className="productAdmin__container">
              <ProductsAdmin></ProductsAdmin>
            </div>
          )}
        </div>
      </body>
    </div>
  );
}

export default Profile;
