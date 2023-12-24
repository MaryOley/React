import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './Portal.module.scss';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

export const Portal: FC<Props> = ({ children }) => {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    const portalContainer = document.createElement('div');
    portalContainer.setAttribute('id', 'portal');
    document.body.appendChild(portalContainer);
    setContainer(portalContainer);

    return () => {
      setContainer(undefined);
      portalContainer.remove();
    };
  }, []);

  return container ? createPortal(children, container) : null;
};
