import { FC, ReactNode } from 'react';
import styles from './Sidebar.module.scss';
import { cn } from '../../helpers/classnames';
import { Portal } from '../Portal/Portal';
import { PortalWithTransition } from '../Portal/PortalWithTransition';
// import { cn } from '../../helpers/classnames';

type Props = {
  isOpen?: boolean;
  handleClose?: () => void;
  position?: 'left' | 'right';
  children?: ReactNode;
};

export const Sidebar: FC<Props> = ({
  handleClose,
  isOpen = true,
  children,
  position = 'left',
}: Props) => {
  return (
    <PortalWithTransition
      isOpen={isOpen}
      classNames={{
        wrap: styles[`${position}-wrap`],
        start: styles[`${position}-start`],
        active: styles[`${position}-active`],
        end: styles[`${position}-end`],
      }}
    >
      <div>
        {handleClose && (
          <button className={styles.close} onClick={() => handleClose()}>
            x
          </button>
        )}
        {children}
      </div>
    </PortalWithTransition>
  );
};
