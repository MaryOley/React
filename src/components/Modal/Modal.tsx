import { ReactNode, useState } from 'react';
import styles from './Modal.module.scss';
import { PortalWithTransition } from '../Portal/PortalWithTransition';

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
  const handleClose = () => {
    onClickClose();
  };

  return (
    <PortalWithTransition
      isOpen={isOpen}
      classNames={{
        wrap: styles.wrap,
        start: styles.start,
        active: styles.active,
        end: styles.end,
      }}
    >
      <div className={styles.modal}>
        {withCloseButton && (
          <button className={styles.сlose} onClick={handleClose}>
            x
          </button>
        )}

        {title && <h1>{title}</h1>}

        <p>{children}</p>

        {/* <button className={styles.button} onClick={handleClose}>
          Close
        </button> */}
      </div>
    </PortalWithTransition>
  );
};
