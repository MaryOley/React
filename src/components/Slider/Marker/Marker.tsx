import { FC, ReactNode, useState } from 'react';
import styles from './Marker.module.scss';
import { cn } from '../../../helpers/classnames';

type Props = {
  isActive: boolean;
  onClickMarker: () => void;
};

export const Marker: FC<Props> = ({ isActive, onClickMarker }) => {
  return (
    <>
      <div
        onClick={onClickMarker}
        className={cn(styles.marker, { [styles.isActive]: isActive === true })}
      ></div>
    </>
  );
};
