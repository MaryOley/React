import { ReactNode, useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import cn from 'classnames';

type Props = {
  isOpen: boolean;
  onClickClose: () => void;
  children?: ReactNode;
  title?: string;
  withCloseButton?: boolean;
};

export const Modal = ({
  isOpen,
  onClickClose,
  children,
  title,
  withCloseButton,
}: Props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // useEffect(() => {
  //   if (isOpen === false) {
  //     setIsFullScreen(false);
  //   }
  // }, [isOpen]);

  const handleClose = () => {
    onClickClose();
    setIsFullScreen(false);
  };

  return (
    <div
      className={cn(styles.modal, {
        [styles.isOpen]: isOpen,
        [styles.isFullScreen]: isFullScreen,
      })}
    >
      {withCloseButton && (
        <button className={styles.buttonClose} onClick={handleClose}>
          x
        </button>
      )}
      {withCloseButton && (
        <button className={styles.buttonFullScreen} onClick={() => setIsFullScreen(true)}>
          x
        </button>
      )}
      {title && <h1>{title}</h1>}

      <p>{children}</p>

      <button className={styles.button} onClick={handleClose}>
        Close
      </button>
    </div>
  );
};
