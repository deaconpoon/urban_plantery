import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signin } from "../actions/UserActions";

const SignInUser = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignIn = useSelector((state) => state.userSignIn);
  const { loading, userInfo, error } = userSignIn;
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {};
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push(
      redirect === "/" ? "register" : "register?redirect=" + redirect
    );
  };

  return (
    <div className="form">
      <body className="section">
        <form onSubmit={submitHandler}>
          <div className="form__container">
            <div className="form__body">
              <li>
                <h2 className="form__signIn--title">Sign-In</h2>
              </li>
              <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
              </li>
              <li>
                <label htmlFor="form__email">Email</label>
                <input
                  className="form__email--input"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="password">Password</label>
                <input
                  className="form__password--input"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </li>
              <li>
                <button className="form__signIn" type="submit">
                  Sign in
                </button>
              </li>
            </div>
            <div className="form__body__or">OR</div>
            <div className="form__body__register">
              <h2 className="form__body__register--title">
                New to Urban Plantery?
              </h2>
              <button onClick={handleClick} className="form__submit__btn">
                Create your account
              </button>
            </div>
          </div>
        </form>
      </body>
    </div>
  );
};

export default SignInUser;
