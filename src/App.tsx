import { useState } from "react";
import { Header } from "./components/Header/Header";
import style from "./app.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <div className={style.wrapper}>
          <div className={style.headerBox}>
            <Header></Header>
          </div>
          <div className={style.imagesContainer}>
            <div className={style.imagesBox}>
              <img src="/Frame.svg"></img>
              <div className={style.runString}>
                <img src="/chilly.svg"></img>
                <div className={style.chillyText}>
                  PUT SOME FIRE IN YOUR BELLY
                </div>
              </div>
              <img src="/imagesBox1.svg"></img>
            </div>
            <div className={style.imagesBox}>
              <div className={style.imagesText}>
                THE FIRST HOT SAUCE MADE FOR COFFEE
              </div>
              <img src="/imagesBox2.svg"></img>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
