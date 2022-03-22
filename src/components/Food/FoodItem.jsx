import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import FoodForm from "./FoodForm";
import style from "./FoodItem.module.css";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <li key={props.key} className={style.food__item}>
      <div className={style["food__item-right"]}>
        <p className={style["food__item-title"]}>{props.name}</p>
        <span className={style["food__item-price"]}>{props.price} ت</span>
      </div>
      <div className={style["food__item-left"]}>
        <FoodForm onAddCart={addItemHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
