import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

type Props = {
  children: ReactNode;
  menuContent: ReactNode;
};

export const Layout: FC<Props> = ({ children, menuContent }) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.header}>{menuContent}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
