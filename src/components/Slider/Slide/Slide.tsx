import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './Slide.module.scss';
import { cn } from '../../../helpers/classnames';
import { PortalWithTransition } from '../../Portal/PortalWithTransition';

type Props = {
  children: ReactNode;
  isActive: boolean;
};

export const Slide: FC<Props> = ({ children, isActive }) => {
  const [isZoom, setZoom] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setZoom(false);
    }
  }, [isActive]);

  return (
    <>
      <div className={cn(styles.slide)} onClick={() => setZoom(true)}>
        {children}
      </div>
      <PortalWithTransition
        isOpen={isZoom}
        classNames={{
          wrap: styles.wrap,
          start: styles.start,
          active: styles.active,
          end: styles.end,
        }}
      >
        <div className={styles.zoom} onClick={() => setZoom(false)}>
          {children}
        </div>
      </PortalWithTransition>
    </>
  );
};
