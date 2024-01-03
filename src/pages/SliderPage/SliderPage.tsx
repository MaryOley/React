import { FC } from 'react';
import styles from './SliderPage.module.scss';
import { Slider } from '../../components/Slider/Slider';

export const SliderPage = () => {
  return (
    <div className={styles.position}>
      <Slider></Slider>
    </div>
  );
};

