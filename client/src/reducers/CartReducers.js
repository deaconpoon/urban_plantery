import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstants";

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
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
}
export { cartReducer };
