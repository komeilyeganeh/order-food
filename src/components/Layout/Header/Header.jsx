import style from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.header__title}>سفارش غذا</h2>
      <div>
        <HeaderButton />
      </div>
    </header>
  );
};

export default Header;
