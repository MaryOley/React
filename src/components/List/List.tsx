import { FC, ReactNode, useEffect } from 'react';
import styles from './List.module.scss';
import { cn } from '../../helpers/classnames';

type Props<T> = {
  items: T[];
  onClickItem: (item: T, index?: number) => void;
  renderItem: (item: T, index?: number) => ReactNode;
  isActive: (item: T, index?: number) => boolean;
  scrollIndex?: number | null;
};

export const List = <T,>({
  items,
  onClickItem,
  renderItem,
  isActive,
  scrollIndex,
}: Props<T>) => {
  useEffect(() => {
    if (scrollIndex !== undefined) {
      const elem = document.querySelector(`[data-scroll='${scrollIndex}']`);

      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollIndex]);

  return (
    <div
      className={styles.list}
      onScroll={(e) => console.log((e.target as HTMLDivElement).scrollTop)}
    >
      {items.map((item, index) => (
        <div
          key={index}
          data-scroll={index}
          onClick={() => onClickItem(item, index)}
          className={cn({ [styles.active]: isActive(item, index) })}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};
