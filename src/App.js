import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Food/Foods";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import CartProvider from "./Context/CartProvider";

function App() {

  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => setCartIsShow(true);

  const hideCartHandler = () => setCartIsShow(false);

  return (
    <CartProvider>
      {cartIsShow && <Cart onHide={hideCartHandler}/>}
      <Header onShow={showCartHandler}/>
      <Main>
        <Foods />
      </Main>
    </CartProvider>
  );
}

export default App;
