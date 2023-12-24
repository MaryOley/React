import { useState } from 'react';
import styles from './CrossAndZero.module.scss';

export const CrossAndZero = () => {
  const [state, setState] = useState<Record<string, string>>({});

  const field = new Array(3).fill(null).map((item, rowIndex) => (
    <div key={rowIndex}>
      {new Array(3).fill(null).map((item, cellIndex) => (
        <div
          className={styles.cell}
          onClick={() => setState({ ...state, [`${rowIndex}-${cellIndex}`]: 'X' })}
          key={cellIndex}
        >
          {state[`${rowIndex}-${cellIndex}`]}
        </div>
      ))}
    </div>
  ));

  return <div>{field}</div>;
};
