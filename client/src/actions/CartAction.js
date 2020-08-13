import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants";
import axios from "axios";
import cookie from "js-cookie";

const addToCart = (productId, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity,
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};
const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const {
    cart: { cartItems },
  } = getState();
  cookie.set("cartItems", JSON.stringify(cartItems));
};

export { addToCart, removeFromCart };
