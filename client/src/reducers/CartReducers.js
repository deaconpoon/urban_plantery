import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_DELETE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
} from "../constants/CartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      //check if cart items is the same as added product
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems:
            //Use updated quantity
            state.cartItems.map((x) =>
              //or use current quantity
              x.product === product.product
                ? { ...x, quantity: x.quantity + item.quantity }
                : x
            ),
        };
      }
      //add the separate item int ht
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      const deleteItem = action.payload;
      //check if cart items is the same as added product
      const deleteProduct = state.cartItems.find(
        (x) => x.product === deleteItem.product
      );
      if (deleteProduct) {
        return {
          cartItems:
            //Use updated quantity
            state.cartItems.map((x) => {
              //or use current quantity
              return { ...x, quantity: x.quantity - deleteItem.quantity };
            }),
        };
      }
    case CART_DELETE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING:
      return { ...state, shipping: action.payload };
    case CART_SAVE_PAYMENT:
      return { ...state, payment: action.payload };

    default:
      return state;
  }
}
export { cartReducer };
