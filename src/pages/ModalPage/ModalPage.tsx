import { useState } from 'react';
import styles from './ModalPage.module.scss';
import { Modal } from '../../components/Modal/Modal';

export const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>Modal</h1>

      <button onClick={() => setIsOpen(true)}>Открыть Modal</button>

      <Modal isOpen={isOpen} onClickClose={() => setIsOpen(false)} withCloseButton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, accusamus nulla.
        Alias, optio, non eos voluptate iusto odit animi delectus dolorum veritatis
        mollitia itaque. Molestiae consequuntur rem eligendi, enim laboriosam fugiat
        assumenda est officia esse suscipit nisi hic magnam obcaecati vel! Accusantium
      </Modal>
    </div>
  );
};
