import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import style from "./Cart.module.css";

const Cart = () => {
  return (
    <Modal>
      <ul>
        <CartItem />
      </ul>
      <div className={style.total__amount}>
        <h4>مجموع قیمت</h4>
        <span>30,000 تومان</span>
      </div>
      <div className={style.cart__buttons}>
        <button className={`${style.cart__btn} ${style.cart__order}`}>
          سفارش
        </button>
        <button className={`${style.cart__btn} ${style.cart__close}`}>
          بستن
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
