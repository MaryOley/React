import { useState } from 'react';
import styles from './ModalPage.module.scss';
import { Modal } from '../../components/Modal/Modal';

export const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.buttonOpen} onClick={() => setIsOpen(true)}>
        open
      </button>
      <Modal isOpen={isOpen} onClickClose={() => setIsOpen(false)} />
    </div>
  );
};
