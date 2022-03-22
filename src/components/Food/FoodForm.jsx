import { useRef, useState } from "react";
import style from "./FoodForm.module.css";

const FoodForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const inputAmount = inputAmountRef.current.value;
    const inputAmountNum = +inputAmount;

    if (inputAmount.trim().length === 0 || inputAmountNum < 1 || inputAmountNum > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);

    props.onAddCart(inputAmountNum);

  };

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        ref={inputAmountRef}
        type="number"
        className={!amountIsValid ? `${style.amount__food} ${style.amount__food_error}` : style.amount__food}
        min="0"
        step="1"
        max="5"
        defaultValue="0"
      />
      <button type="submit" className={style.submit__form}>
        افزودن به سبد خرید
      </button>
      {!amountIsValid && <p className={style.error__message}>لطفا عددی بین 1 تا 5 را وارد کنید</p>}
    </form>
  );
};

export default FoodForm;
