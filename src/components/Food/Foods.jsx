import FoodItem from "./FoodItem";
import style from "./Foods.module.css";

const foodItems = [
    {id: "f1", name: "ماکارونی", price: 17000},
    {id: "f2", name: "آبگوشت", price: 24000},
    {id: "f3", name: "کباب", price: 30000},
    {id: "f4", name: "خورشت قیمه", price: 19000},
];

const Foods = () => {
  return (
    <div className={style.list__foods}>
      <ul className={style.foods__ul}>
        {foodItems.map(item => (
            <FoodItem key={item.id} id={item.id} name={item.name} price={item.price}/>
        ))}
      </ul>
    </div>
  );
};

export default Foods;
