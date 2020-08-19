import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cookie from "js-cookie";
import {
  productListReducer,
  productDetailReducer,
} from "../reducers/ProductListReducers";
import { cartReducer } from "../reducers/CartReducers";
import {
  userSignInReducer,
  userRegisterReducer,
} from "../reducers/UserReducers";

const cartItems = cookie.getJSON("cartItems") || [];
const userInfo = cookie.getJSON("userInfo") || [];

const initialState = {
  cart: { cartItems },
  userSignIn: { userInfo },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default Store;
