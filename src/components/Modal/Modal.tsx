import { useState } from "react";
import styles from "./Modal.module.scss";

type Props = {
  showModal: boolean;
};

export const Modal = (props: Props) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <div className={showModal ? styles.modal : styles.modalClose}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          consectetur ipsum suscipit, reiciendis animi aliquid fugit ratione
          deserunt possimus recusandae quae et numquam, deleniti consequatur
          asperiores facilis nostrum ipsam eaque.
        </p>
        <button className={styles.button} onClick={() => setShowModal(false)}>Close</button>
      </div>
    </>
  );
};
