import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingItemCart = state.items[existingItemIndex];
    let updatedItems;
    if (existingItemCart) {
      const updatedItem = {
        ...existingItemCart,
        amount: existingItemCart.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const existingItemCart = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItemCart.price;
    let updatedItems;
    if (existingItemCart.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.payload);
    }else {
        const updatedItem = {...existingItemCart, amount: existingItemCart.amount - 1};
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
    }
    return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const valueContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={valueContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
