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
          setIsOpen(true);
        }}
        className={style.button}
      >
        ?
      </button>
      <div className={style.wrapper}>
        <div className={style.headerBox}>
          <Header />

          <Modal isOpen={isOpen} onClickClose={() => setIsOpen(false)} withCloseButton={true}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              consectetur ipsum suscipit, reiciendis animi aliquid fugit ratione
              deserunt possimus recusandae quae et numquam, deleniti consequatur
              asperiores facilis nostrum ipsam eaque.
          </Modal>
        </div>
      </div>
    </>
  );
};

export default App;
