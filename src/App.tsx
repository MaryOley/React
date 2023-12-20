import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import style from "./app.module.scss";
import { useState } from "react";

type Props = {
  isOpen: boolean;
};

export const App = (props: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className={style.button}
      >?</button>
      <div className={style.wrapper}>
        <div className={style.headerBox}>
          <Header />
          <Modal showModal={isOpen} />
        </div>
      </div>
    </>
  );
};

export default App;
