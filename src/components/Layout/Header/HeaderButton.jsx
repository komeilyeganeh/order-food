import { useContext, useEffect, useState } from "react";
import CartContext from "../../../Context/CartContext";
import style from "./HeaderButton.module.css";

const HeaderButton = ({onShowCart}) => {
  const [btnEffect, setBtnEffect] = useState(false);

  const cartCtx = useContext(CartContext);
  const cartItemsNum = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const btnClasses = `${style.cart__button} ${btnEffect ? style.bump : '' }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setBtnEffect(true);

    setTimeout(() => setBtnEffect(false), 300);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onShowCart}>
      سبد خرید <span className={style.cart__badge}>{cartItemsNum}</span>
    </button>
  );
};

export default HeaderButton;
