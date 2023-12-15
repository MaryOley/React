import { useState } from "react";
import { Header } from "./components/Header/Header";
import style from "./app.module.scss";

function App() {
  return (
    <>
     
        <div className={style.wrapper}>
          <div className={style.headerBox}>
            <Header></Header>
          </div>
        </div>
      
    </>
  );
}

export default App;
