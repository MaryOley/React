import { FC } from 'react';
import styles from './Menu.module.scss';
import { cn } from '../../helpers/classnames';

type Props = {
  items: { title: string }[];
  active: number;
  onClickMenuItem: (index: number) => void;
};

export const Menu: FC<Props> = ({ items, active, onClickMenuItem }) => {
  return (
    <div className={styles.header}>
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onClickMenuItem(index)}
          className={cn(styles.title, { [styles.active]: active === index })}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
