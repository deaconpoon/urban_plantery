import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/UserActions";

const RegisterUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div className="form">
      <body className="section">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2 className="form__title">Create Account</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li className="form--entry">
              <label htmlFor="name">Name</label>
              <input
                className="form--input"
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
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </li>
            <li className="form--entry form--entry--confirmPw">
              <label htmlFor="rePassword">Re-Enter Password</label>
              <input
                className="form--input"
                type="password"
                id="rePassword"
                name="rePassword"
                onChange={(e) => setRePassword(e.target.value)}
              ></input>
            </li>
            <li className="form--entry form--entry--register">
              <button type="submit" className="form__signIn">
                Register
              </button>
            </li>
            <li>
              Already have an account?{"  "}
              <Link
                to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
                className="button secondary text-center"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </form>
      </body>
    </div>
  );
};

export default RegisterUser;
