import { FC } from 'react';
import styles from './User.module.scss';

type Props = {};

export const User: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.user}>
        <div>
          <img className={styles.img} src="src/components/img/user.jpg" />
        </div>
        <div className={styles.userTitle}>
          <div className={styles.userName}>Script</div>
          <div className={styles.userMail}>onit228@gmail.com</div>
        </div>
      </div>
    </>
  );
};
