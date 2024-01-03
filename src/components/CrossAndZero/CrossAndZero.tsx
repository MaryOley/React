import { useState } from 'react';
import styles from './CrossAndZero.module.scss';

export const CrossAndZero = () => {
  const [cellState, setCellState] = useState({});

  let player = 'x';

  const field = new Array(9).fill(null).map((item, index) => (
    <div
      key={index}
      className={styles.cell}
      onClick={() => setCellState({ ...cellState, [`${index}`]: 'x' })}
    >
      {cellState[`${index}`]}
    </div>
  ));
  console.log(field);
  return <div className={styles.container}>{field}</div>;
};
