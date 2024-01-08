import { FC, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

type Props = {
  isOpen: boolean;
  children: ReactNode;
  classNames: {
    wrap: string;
    start: string;
    active: string;
    end: string;
  };
  position: {
    x: number;
    y: number;
  };
};

export const PortalWithPosition: FC<Props> = ({
  isOpen,
  children,
  classNames,
  position,
}) => {
  const nodeRef = useRef(null);

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={0}
      mountOnEnter
      unmountOnExit
      // classNames={{
      //   enter: classNames.start,
      //   enterActive: classNames.active,
      //   exit: classNames.end,
      // }}
    >
      <div
        style={{ ['--top']: position.y + 'px', ['--left']: position.x + 'px' }}
        className={classNames.wrap}
        ref={nodeRef}
      >
        {children}
      </div>
    </CSSTransition>,
    document.body,
  );
};
