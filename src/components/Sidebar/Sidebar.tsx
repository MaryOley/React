import { FC, ReactNode } from 'react';
import styles from './Sidebar.module.scss';
import { cn } from '../../helpers/classnames';

type Props = {
    isOpen: boolean;
    handleClose: () => void;
    children?: ReactNode;
};

export const Sidebar: FC<Props> = ({handleClose, isOpen, children}) => {

  return (
    <div className="">
      <button className={cn(styles.button, {[styles.red]: false})}>x</button>
    </div>
  );
};

