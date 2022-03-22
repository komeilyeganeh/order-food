import style from "./FoodForm.module.css";

const FoodForm = () => {
  return (
    <form action="">
      <input
        type="number"
        className={style.amount__food}
        min="0"
        step="1"
        max="5"
        defaultValue="0"
      />
      <button type="submit" className={style.submit__form}>
        افزودن به سبد خرید
      </button>
    </form>
  );
};

export default FoodForm;
