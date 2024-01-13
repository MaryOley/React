import { FC } from 'react';
import styles from './User.module.scss';

type Props = {
  imgUrl: string;
  name: string;
  email: string;
};

export const User: FC<Props> = ({ name, email, imgUrl }) => {
  return (
    <>
      <div className={styles.user}>
        <div>
          <img className={styles.img} src={imgUrl} />
        </div>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.email}>{email}</div>
        </div>
      </div>
    </>
  );
};
