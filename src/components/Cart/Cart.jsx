import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import style from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const Cart = ({ onHide }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const countItems = cartCtx.items.length > 0;

  const removeItemCartHandler = (id) => {
    cartCtx.removeItem(id);
  } 

  const addItemCartHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  }

  return (
    <Modal onHideCart={onHide}>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemCartHandler.bind(null, item)}
            onRemove={removeItemCartHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={style.total__amount}>
        <h4>مجموع قیمت</h4>
        <span>{totalAmount} تومان</span>
      </div>
      <div className={style.cart__buttons}>
        {countItems && (
          <button className={`${style.cart__btn} ${style.cart__order}`}>
            سفارش
          </button>
        )}
        <button
          className={`${style.cart__btn} ${style.cart__close}`}
          onClick={onHide}
        >
          بستن
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
