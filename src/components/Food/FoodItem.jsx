import FoodForm from "./FoodForm";
import style from "./FoodItem.module.css";

const FoodItem = ({key, name, price}) => {
  return (
    <li key={key} className={style.food__item}>
      <div className={style["food__item-right"]}>
        <p className={style["food__item-title"]}>{name}</p>
        <span className={style["food__item-price"]}>{price} ت</span>
      </div>
      <div className={style["food__item-left"]}>
        <FoodForm />
      </div>
    </li>
  );
};

export default FoodItem;
