import { FC, createRef } from 'react';
import styles from './NoteList.module.scss';

import { cn } from '../../../helpers/classnames';
import { Note } from '../../types/notes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { MenuButton } from '../../MenuButton/MenuButton';

type Props = {
  activeId?: number;
  notes: Note[];
  onClickNote: (note: Note) => void;
  onClickDelete: (id: number) => void;
  onClickEdit: (note: Note) => void;
};

export const NoteList: FC<Props> = ({
  activeId,
  notes,
  onClickNote,
  onClickDelete,
  onClickEdit,
}) => {
  const noteList = notes.map((note) => ({
    ...note,
    nodeRef: createRef(),
  }));

  noteList.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    }
    return -1;
  });

  return (
    <div className={styles.list}>
      {/* заметка из списка */}
      <TransitionGroup className={styles.scroll}>
        {noteList.map((note) => (
          <CSSTransition
            key={note.id}
            nodeRef={note.nodeRef as any}
            timeout={1000}
            classNames={{
              enter: 'animate__animated',
              enterActive: 'animate__zoomIn',
              exit: 'animate__animated',
              exitActive: 'animate__zoomOut',
            }}
          >
            <div
              ref={note.nodeRef as any}
              className={cn(styles.item, {
                [styles.active]: note.id === activeId,
              })} // активная если id заметки из списка равно id выбранной заметки>
            >
              {/*  устанавливаем выбранную заметку, передаем заметку из списка*/}
              <div className={styles.itemTitle} onClick={() => onClickNote(note)}>
                {note.title}
              </div>

              <MenuButton
                menu={[
                  { label: 'Изменить', onClick: () => onClickEdit(note) },
                  { label: 'Удалить', onClick: () => onClickDelete(note.id) },
                ]}
              />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
