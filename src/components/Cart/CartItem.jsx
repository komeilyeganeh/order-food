import style from "./CartItem.module.css";

const CartItem = () => {
  return (
    <li className={style.modal__item}>
      <div className={style["modal__item-right"]}>
        <p className={style["cart__item-title"]}>سوشی</p>
        <span className={style["cart__item-price"]}>15,000ت</span>
        <span className={style["cart__item-count"]}>تعداد : 5</span>
      </div>
      <div className={style["modal__item-left"]}>
        <div>
          <button className={style["btn-order"]}>
            -
          </button>
          <button className={style["btn-order"]}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
