import style from "./HeaderButton.module.css";

const HeaderButton = () => {
  return (
    <button className={style.cart__button}>
      سبد خرید <span className={style.cart__badge}>5</span>
    </button>
  );
};

export default HeaderButton;
