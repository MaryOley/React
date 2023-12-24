import { FC } from 'react';
import styles from './Button.module.scss';
import { cn } from '../../helpers/classnames';

type Props = {
  size?: 'xs' | 's';
  color?: 'light' | 'dark';
};

export const Button: FC<Props> = ({ size, color }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.xs]: size === 'xs',
        [styles.s]: size === 's',
        [styles.light]: color === 'light',
        [styles.dark]: color === 'dark',
      })}
    >
      Кнопка
    </button>
  );
};
