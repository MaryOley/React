import { useState } from 'react';
import styles from './ModalPage.module.scss';
import { Modal } from '../../components/Modal/Modal';

export const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Modal</h1>
      <button className={styles.buttonOpen} onClick={() => setIsOpen(true)}>
        Открыть
      </button>
      <Modal isOpen={isOpen} onClickClose={() => setIsOpen(false)} withCloseButton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, accusamus nulla.
        Alias, optio, non eos voluptate iusto odit animi delectus dolorum veritatis
        mollitia itaque. Molestiae consequuntur rem eligendi, enim laboriosam fugiat
        assumenda est officia esse suscipit nisi hic magnam obcaecati vel! Accusantium
        quos necessitatibus sequi aliquam pariatur voluptatem possimus ut non natus
        dolorum incidunt autem nulla aliquid quasi facere labore a placeat atque eos sint
        fuga asperiores, tempore alias esse. Suscipit magnam temporibus iusto sunt ex
        blanditiis voluptatum cupiditate dolore libero vel aspernatur esse, dicta cumque
        neque commodi voluptas cum, sed nostrum iste. Et debitis ipsam vero doloremque
        natus id?
      </Modal>
    </div>
  );
};
