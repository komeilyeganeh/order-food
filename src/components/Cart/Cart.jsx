import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import style from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = ({onHide}) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;

  return (
    <Modal onHideCart={onHide}>
      <ul>
        {cartCtx.items.map(item => (
          <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}/>
        ))}
      </ul>
      <div className={style.total__amount}>
        <h4>مجموع قیمت</h4>
        <span>{totalAmount} تومان</span>
      </div>
      <div className={style.cart__buttons}>
        <button className={`${style.cart__btn} ${style.cart__order}`}>
          سفارش
        </button>
        <button className={`${style.cart__btn} ${style.cart__close}`} onClick={onHide}>
          بستن
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
