import { FC } from 'react';
import styles from './AccardionPage.module.scss';
import { Accardion } from '../../components/Accardion/Accardion';

export const AccardionPage = () => {
  return (
    <div className={styles.position}>
      <Accardion title="Accardion" content="Accardion content"></Accardion>
    </div>
  );
};
