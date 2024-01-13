import { FC, ReactNode, useState } from 'react';
import styles from './Search.module.scss';
import { List } from '../List/List';

type Props<T> = {
  items: T[];
  renderItem: (item: T, index?: number) => ReactNode;
  searchFn: (value: string, item: T) => boolean;
  onClickResult: (item: T, index?: number) => void;
};

export const Search = <T,>({ items, renderItem, searchFn, onClickResult }: Props<T>) => {
  const [value, setValue] = useState('');

  const [searchedItems, setSearchedItems] = useState<T[]>([]);

  const closeDropdown = () => {
    setValue('');
    setSearchedItems([]);
  };

  const showSearchResult = searchedItems.length !== 0 && value !== '';

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => {
          const inputValue = e.target.value;
          setValue(inputValue);

          const filtred = items.filter((item) => searchFn(inputValue, item));
          setSearchedItems(filtred);
        }}
      />

      {showSearchResult && (
        <div className={styles.dropdown}>
          {searchedItems.map((item, index) => (
            <div
              className={styles.item}
              key={index}
              onClick={() => {
                onClickResult(item, index);
                closeDropdown();
              }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
