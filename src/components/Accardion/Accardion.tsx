import { FC, useState } from 'react';
import styles from './Accardion.module.scss';

type Props = {
  title: string;
  content: string;
};

export const Accardion: FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accardion}>
      <div onClick={() => setIsOpen(!isOpen)}>{title}</div>
      {isOpen && <div className={styles.accardionEl}>{content}</div>}
    </div>
  );
};
