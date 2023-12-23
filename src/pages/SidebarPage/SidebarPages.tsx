import { FC, useState } from 'react';
import styles from './SidebarPages.module.scss';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const SidebarPages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const o = {
    dawd: { a: 4 },
  };

  return (
    <>
      <button className={styles.buttonOpen} onClick={() => setIsOpen(true)}>
        open
      </button>
      <Sidebar
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        title="gadgadgadgad"
        position="right"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus, obcaecati
        molestiae rerum accusantium quaerat? Asperiores maiores, excepturi quis iusto
        beatae quaerat, iste quasi dignissimos molestias perferendis adipisci ducimus est.
      </Sidebar>
    </>
  );
};
