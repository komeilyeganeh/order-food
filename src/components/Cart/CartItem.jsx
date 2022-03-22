import style from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li key={props.key} className={style.modal__item}>
      <div className={style["modal__item-right"]}>
        <p className={style["cart__item-title"]}>{props.name}</p>
        <span className={style["cart__item-price"]}>{props.price} ت</span>
        <span className={style["cart__item-count"]}>تعداد : {props.amount}</span>
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
