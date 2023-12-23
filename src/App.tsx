import { useState } from "react";
import style from "./app.module.scss";
import { Sidebar } from "./components/Sidebar/Sidebar";

type Props = {
  isOpen: boolean;
}

function App(props: Props) {

const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
        <div className={style.wrapper}>
          <div className={style.headerBox}>
            <button className={style.buttonOpen} onClick={() => setIsOpen(true)}>open</button>
            <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} title="gadgadgadgad">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus, obcaecati molestiae rerum accusantium quaerat? Asperiores maiores, excepturi quis iusto beatae quaerat, iste quasi dignissimos molestias perferendis adipisci ducimus est.
            </Sidebar>
          </div>
        </div>
        
      
    </>
  );
}

export default App;
