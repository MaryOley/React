import { FC, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Sidebar } from '../Sidebar/Sidebar';
import { Header } from '../Header/Header';

type Props = {
  children: ReactNode;
  sidebarContent: ReactNode;
};

export const Layout: FC<Props> = ({ children, sidebarContent }) => {
  return (
    <>
      <Header></Header>
      <div className={styles.layout}>
        <div className={styles.leftSide}>{sidebarContent}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
