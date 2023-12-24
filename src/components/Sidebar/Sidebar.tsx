import { FC, ReactNode } from 'react';
import styles from './Sidebar.module.scss';
import { cn } from '../../helpers/classnames';
import { Portal } from '../Portal/Portal';
// import { cn } from '../../helpers/classnames';

type Props = {
  isOpen?: boolean;
  handleClose?: () => void;
  position?: 'left' | 'right';
  children?: ReactNode;
  title?: string;
};

export const Sidebar: FC<Props> = ({
  handleClose,
  isOpen = true,
  children,
  title,
  position = 'left',
}: Props) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <div>
        <div
          className={cn(styles.sidebar, {
            [styles.close]: !isOpen,
            [styles.right]: position === 'right',
            [styles.left]: position === 'left',
          })}
        >
          {title}
          {handleClose && (
            <button className={styles.closeBtn} onClick={() => handleClose()}>
              x
            </button>
          )}
          {children}
        </div>
      </div>
    </Portal>
  );
};
