import { FC, ReactNode, useState } from 'react';
import styles from './Marker.module.scss';
import { cn } from '../../../helpers/classnames';

type Props = {
  isActive: boolean;
};

export const Marker: FC<Props> = (isActive) => {
  const [active, setIsActive] = useState(false);

  return (
    <>
      <div
        className={cn(styles.marker, { [styles.isActive]: active === true })}
        onClick={() => setIsActive(true)}
      ></div>
    </>
  );
};
