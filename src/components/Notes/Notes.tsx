import { FC, useState } from 'react';
import styles from './NewNotes.module.scss';
import { NoteContent } from './NoteContent/NoteContent';
import { Modal } from '../Modal/Modal';
import { NoteList } from './NoteList/NoteList';
import {
  useAddNoteQuery,
  useDeleteNoteQuery,
  useGetNotesQuery,
  useUpdateNoteQuery,
} from '../../hooks/useNoteQuery';
import { Note } from '../types/notes';
import { Sidebar } from '../Sidebar/Sidebar';

export const Notes: FC = () => {
  const { data: notes = [], isFetched } = useGetNotesQuery();

  const [note, setNote] = useState<Note | null>(null);

  const [isOpenModal, setOpenModal] = useState(false);
  const [editNote, setEditNote] = useState<Note | null>(null);
  const [editTitleValue, setEditTitleValue] = useState('');

  const saveTitle = () => {
    if (editNote && editTitleValue !== editNote.title) {
      saveNote({ ...editNote, title: editTitleValue });
    }
    closeEditModal();
  };

  const isOpenEditModal = Boolean(editNote);
  const closeEditModal = () => setEditNote(null);
  const [inputValue, setInputValue] = useState('');

  const addNoteQuery = useAddNoteQuery();

  const addNote = () => {
    const newNote = { title: inputValue, content: '' };
    addNoteQuery(newNote);

    setOpenModal(false);
    setInputValue('');
  };

  const deleteNoteQuery = useDeleteNoteQuery();

  const updateNoteQuery = useUpdateNoteQuery();

  const saveNote = (note: Note | null) => {
    if (note) {
      updateNoteQuery(note);
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <Sidebar isOpen={isFetched}>
          {notes.length !== 0 && (
            <NoteList
              notes={notes}
              activeId={note?.id}
              onClickNote={(clickedNote) => {
                saveNote(note);
                setNote(clickedNote);
              }}
              onClickEdit={(note) => {
                setEditTitleValue(note.title);
                setEditNote(note);
              }}
              onClickDelete={(id) => deleteNoteQuery(id)}
            />
          )}

          <button onClick={() => setOpenModal(true)}>Добавить</button>
        </Sidebar>
        <div className={styles.content} data-color-mode="light">
          <NoteContent
            note={note}
            onChangeNote={setNote}
            onClickSave={(note) => saveNote(note)}
          />
        </div>
      </div>

      {/* Модалки, всплывающие окна */}
      <Modal isOpen={isOpenModal} onClickClose={() => setOpenModal(false)}>
        <input
          className={styles.input}
          value={inputValue}
          placeholder="Новая заметка"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button onClick={() => setOpenModal(false)}>Отмена</button>
        <button onClick={() => addNote()}>Добавить</button>
      </Modal>

      <Modal isOpen={isOpenEditModal} onClickClose={closeEditModal}>
        <input
          className={styles.input}
          value={editTitleValue}
          onChange={(e) => {
            setEditTitleValue(e.target.value);
          }}
        />

        <button onClick={() => closeEditModal()}>Отмена</button>
        <button onClick={() => saveTitle()}>Сохранить</button>
      </Modal>
    </>
  );
};
