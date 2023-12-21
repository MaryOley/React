import { useState } from "react";
import { Header } from "./components/Header/Header";
import style from "./app.module.scss";
import { Sidebar } from "./components/Sidebar/Sidebar";


function App() {

const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     
        <div className={style.wrapper}>
          <div className={style.headerBox}>
            <button onClick={() => setIsOpen(true)}>open</button>
            <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)}></Sidebar>
          </div>
        </div>
        
      
    </>
  );
}

export default App;
