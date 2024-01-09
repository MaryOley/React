import { ReactNode } from 'react';
import style from './Header.module.scss';

type Props = {
  children: ReactNode;
};

export const Header: Props = ({ children }) => {
  return <div>{children}</div>;
};
