import CartContext from "./CartContext";

const CartProvider = (props) => {

    const addItemToCartHandler = item => {};

    const removeItemFromCartHandler = id => {};

  return <CartContext.Provider value={{items: [], totalAmount: 0, addItem: addItemToCartHandler, removeItem: removeItemFromCartHandler}}>
      {props.children}
  </CartContext.Provider>;
};

export default CartProvider;
