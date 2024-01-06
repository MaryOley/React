import { FC, ReactNode } from 'react';
import styles from './Performer.module.scss';

type Props = {
  name: string;
  likes: number;
  children: ReactNode;
};

export const Performer: FC<Props> = ({ name, likes, children }) => {
  return (
    <div className={styles.card}>
      {children}
      <div className={styles.name}>{name}</div>
      <div className={styles.likes}>
        <div>❤</div>
        {likes}
      </div>
    </div>
  );
};
