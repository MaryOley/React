import { FC, useState } from 'react';
import styles from './Field.module.scss';

type Props = {
  player: 'x' | 'o';
};

export const Field: FC<Props> = ({ player }) => {
  const [stateCell, setStateCell] = useState({});

  const field = new Array(9).fill(null).map((item, index) => (
    <div
      onClick={() => setStateCell({ ...stateCell, [index]: player })}
      key={index}
      className={styles.cell}
    >
      {stateCell[index]}
    </div>
  ));
  console.log(field);
  return <div className={styles.container}>{field}</div>;
};
