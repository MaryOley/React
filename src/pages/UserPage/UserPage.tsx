import { FC } from 'react';
import styles from './UserPage.module.scss';

type Props = {};

export const UserPage: FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.center}>
          <div className={styles.userHeader}>
            <div className={styles.userCard}>
              <div>
                <img className={styles.img} src="src/components/img/user.jpg" />
              </div>
              <div className={styles.userTitle}>
                <div className={styles.userName}>Script</div>
                <div className={styles.userMail}>onit228@gmail.com</div>
              </div>
            </div>
            <div className={styles.border}></div>
            <div className={styles.userNotes}>
              <div>13 Notes</div>
            </div>
            <div className={styles.border}></div>
            <div>
              <div>5 Readers</div>
            </div>
          </div>
          <div className={styles.table}></div>
        </div>
      </div>
    </>
  );
};
