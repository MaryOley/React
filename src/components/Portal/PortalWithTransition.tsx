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
};

export const PortalWithTransition: FC<Props> = ({ isOpen, children, classNames }) => {
  const nodeRef = useRef(null);

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classNames.start,
        enterActive: classNames.active,
        exit: classNames.end,
      }}
    >
      <div className={classNames.wrap} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>,
    document.body,
  );
};
