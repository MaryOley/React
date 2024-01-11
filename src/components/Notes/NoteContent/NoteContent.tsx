import { FC } from 'react';
import styles from './NoteContent.module.scss';
import MDEditor from '@uiw/react-md-editor';
import { Note } from '../../types/notes';
import { BsSearchHeart as IconSearch } from 'react-icons/bs';
import { RxCross1 as IconCross } from 'react-icons/rx';
import { MenuButton } from '../../MenuButton/MenuButton';
import { Button } from 'antd';
type Props = {
  note: Note | null;
  onChangeNote: React.Dispatch<React.SetStateAction<Note | null>>;
  onClickSave: (note: Note) => void;
};

export const NoteContent: FC<Props> = ({ note, onChangeNote, onClickSave }) => {
  if (!note) {
    return (
      <div className={styles.inputBox}>
        {/* <div className={styles.search}>
          <IconSearch size={25} className={styles.searchIcon} />
          <input className={styles.input}></input>
          <IconCross className={styles.crossIcon} />
        </div> */}
      </div>
    );
  }

  return (
    <>
      <MDEditor
        className={styles.editor}
        value={note.content}
        onChange={(value) => onChangeNote({ ...note, content: value || '' })}
      />
      <Button
        size="small"
        type="primary"
        danger
        className={styles.btnSave}
        onClick={() => onClickSave(note)}
      >
        Сохранить
      </Button>
    </>
  );
};
