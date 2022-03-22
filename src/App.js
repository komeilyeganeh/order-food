import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Food/Foods";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Main>
        <Foods />
      </Main>
    </Fragment>
  );
}

export default App;
