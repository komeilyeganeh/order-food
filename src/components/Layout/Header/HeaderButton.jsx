import { useContext } from "react";
import CartContext from "../../../Context/CartContext";
import style from "./HeaderButton.module.css";

const HeaderButton = ({onShowCart}) => {

  const cartCtx = useContext(CartContext);
  const cartItemsNum = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={style.cart__button} onClick={onShowCart}>
      سبد خرید <span className={style.cart__badge}>{cartItemsNum}</span>
    </button>
  );
};

export default HeaderButton;
