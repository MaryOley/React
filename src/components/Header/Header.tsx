import { useState } from "react";
import style from "./Header.module.scss";

export const Header = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={style.wrapper}>
      <div className={style.menuElRed}>
        <div className={style.menuEl}>GO BACK</div>
      </div>
      <div className={style.menuEl}>STORY</div>
      <div className={style.menuEl}>SHOP</div>
      <div className={style.logo}>
        <div className={style.circleRed}></div>
        <img src="/IMAGE.svg"></img>
        <div className={style.circlePurple}></div>
      </div>
      <div className={style.menuEl}>CONTACT</div>
      <div className={style.menuEl}>WHOLESALE</div>
      <div className={style.menuElRed}>
        <div className={style.menuEl}>CLONE</div>
      </div>
    </div>
  );
};
