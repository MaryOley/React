import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './Portal.module.scss';
import { createPortal } from 'react-dom';

type Props = {
    children?:ReactNode;
};

export const Portal: FC<Props> = ({children}) => {
   const [isMounted, setMounted] = useState(false);

   useEffect(()=>{
    setMounted(true);
   }, []);

   if(!isMounted) {
    return null
   }


  return createPortal(<div>{isMounted && children}</div>, document.body);
};

