import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cookie from "js-cookie";
import {
  productListReducer,
  productDetailReducer,
} from "../reducers/ProductListReducers";
import { cartReducer } from "../reducers/CartReducers";

const cartItems = cookie.getJSON("cartItems") || [];

const initialState = {
  cart: { cartItems },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default Store;
