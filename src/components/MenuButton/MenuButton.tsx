import { FC, useRef, useState } from 'react';
import styles from './MenuButton.module.scss';
import { GoKebabHorizontal } from 'react-icons/go';
import { PortalWithPosition } from '../Portal/PortalWithPosition';
import { useOutsideClick } from '../../hooks/useOutsideClick';

type Props = {
  menu: {
    label: string;
    onClick: () => void;
  }[];
};

export const MenuButton: FC<Props> = ({ menu }) => {
  const [isOpen, setOpen] = useState(false);
  const close = () => setOpen(false);
  const menuRef = useOutsideClick(close);

  const ref = useRef<HTMLButtonElement>(null);

  const position = ref.current?.getBoundingClientRect();

  return (
    <div>
      <button ref={ref} className={styles.button} onClick={() => setOpen(!isOpen)}>
        <GoKebabHorizontal className={styles.icon} />
      </button>

      <PortalWithPosition
        isOpen={isOpen}
        classNames={{
          wrap: styles.wrap,
          start: styles.start,
          active: styles.active,
          end: styles.end,
        }}
        position={{ x: position?.left, y: position?.top + position?.height }}
      >
        <div className={styles.menu} ref={menuRef}>
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.item}
                onClick={() => {
                  item.onClick();
                  close();
                }}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </PortalWithPosition>
    </div>
  );
};
