import { FC, useState } from 'react';
import styles from './SidebarPages.module.scss';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const SidebarPages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false);

  return (
    <>
      <div className={styles.position}>
        <button onClick={() => setIsOpen(true)}>Открыть слева</button>
        <button onClick={() => setIsOpenRight(true)}>Открыть справа</button>
      </div>
      <Sidebar isOpen={isOpen} handleClose={() => setIsOpen(false)} position="left">
        Открыт слева
      </Sidebar>

      <Sidebar
        isOpen={isOpenRight}
        handleClose={() => setIsOpenRight(false)}
        position="right"
      >
        справа
      </Sidebar>
    </>
  );
};
