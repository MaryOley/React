import { FC, useEffect, useState } from 'react';
import styles from './Notes.module.scss';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { Sidebar } from '../Sidebar/Sidebar';
import { Modal } from '../Modal/Modal';
import { is } from 'unist-util-is';

type Note = { id: number; title: string; content: string };

export const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const searchedNotes = notes.filter((note) => {
    return note.title.includes(search) || note.content.includes(search);
  });

  const visibleNotes = search === '' ? notes : searchedNotes;

  const activeNote = visibleNotes.find((note) => note.id === activeNoteId);

  const noteValue = activeNote?.content || '';

  useEffect(() => {
    fetch('http://5.35.90.63:3005/notes/all')
      .then((res) => res.json())
      .then((notes) => setNotes(notes));
  }, [count]);

  const addNote = () => {
    fetch('http://5.35.90.63:3005/notes/add', {
      method: 'POST',
      body: JSON.stringify({ title: title }) as any,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setCount(count + 1));
  };

  const saveNote = () => {
    if (activeNote) {
      fetch('http://5.35.90.63:3005/notes/update', {
        method: 'PUT',
        body: JSON.stringify(activeNote) as any,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => setCount(count + 1));
    }
  };

  const deleteNote = (id: number) => {
    fetch(`http://5.35.90.63:3005/notes/${id}`, {
      method: 'DELETE',
    }).then(() => setCount(count + 1));
  };

  return (
    <div className={styles.wrap}>
      <button
        onClick={() => {
          setOpenSidebar(true);
        }}
        className={styles.mobileBtn}
      >
        Меню
      </button>
      <Sidebar isOpen={isOpenSidebar}>
        <button
          onClick={() => {
            setOpenSidebar(false);
          }}
        >
          x
        </button>
        <div className={styles.search}>
          <input
            className={styles.inputSearch}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
        {visibleNotes.map((note) => (
          <div className={styles.sidebarItem} key={note.id}>
            <div className={styles.noteTitle} onClick={() => setActiveNoteId(note.id)}>
              {note.title}
            </div>
            <button onClick={() => deleteNote(note.id)}>Удалить пост</button>
          </div>
        ))}
      </Sidebar>
      <Modal isOpen={isOpen} onClickClose={() => null}>
        <input
          className={styles.title}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div className={styles.modalBtns}>
          <button
            onClick={() => {
              addNote();
              setIsOpen(false);
            }}
          >
            Добавить
          </button>
          <button onClick={() => setIsOpen(false)}>Отменить</button>
        </div>
      </Modal>
      <div className={styles.left}>
        <div className={styles.search}>
          <input
            className={styles.inputSearch}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
        {visibleNotes.map((note) => (
          <div className={styles.sidebarItem} key={note.id}>
            <div className={styles.noteTitle} onClick={() => setActiveNoteId(note.id)}>
              {note.title}
            </div>
            <button onClick={() => deleteNote(note.id)}>Удалить пост</button>
          </div>
        ))}
        <button className={styles.btnAdd} onClick={() => setIsOpen(true)}>
          Добавить пост
        </button>
      </div>

      <div className={styles.right} data-color-mode="light">
        <MDEditor
          className={styles.md}
          value={noteValue}
          onChange={(value) => {
            const newNotes = [...notes];
            const note = newNotes.find((note) => note.id === activeNoteId);

            if (note) {
              note.content = value || '';
              setNotes(newNotes);
            }
          }}
        />
        <button className={styles.btnSave} onClick={() => saveNote()}>
          Сохранить
        </button>
      </div>
    </div>
  );
};
