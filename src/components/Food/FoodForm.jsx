import { useRef, useState } from "react";
import style from "./FoodForm.module.css";
import CartImg from "../../assets/shop.png";

const FoodForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = inputAmountRef.current.value;
    const inputAmountNum = +inputAmount;

    if (
      inputAmount.trim().length === 0 ||
      inputAmountNum < 1 ||
      inputAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);

    props.onAddCart(inputAmountNum);
  };

  return (
    <form action="" className={style.form} onSubmit={submitHandler}>
      <input
        ref={inputAmountRef}
        type="number"
        className={
          !amountIsValid
            ? `${style.amount__food} ${style.amount__food_error}`
            : style.amount__food
        }
        min="0"
        step="1"
        max="5"
        defaultValue="0"
      />
      <button type="submit" className={style.submit__form}>
        <img src={CartImg} alt="cart" />
      </button>
    </form>
  );
};

export default FoodForm;
