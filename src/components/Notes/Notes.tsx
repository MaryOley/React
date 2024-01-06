import { FC, useEffect, useState } from 'react';
import styles from './Notes.module.scss';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

type Note = { id: number; title: string; content: string };

export const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [count, setCount] = useState(0);
  const [activeNote, setActiveNote] = useState<Note | null>(null);

  useEffect(() => {
    fetch('http://5.35.90.63:3005/notes/all')
      .then((res) => res.json())
      .then((notes) => setNotes(notes));
  }, [count]);

  const addNote = () => {
    fetch('http://5.35.90.63:3005/notes/add', {
      method: 'POST',
      body: JSON.stringify({ title: title, content: content }) as any,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => setCount(count + 1));
  };

  const deleteNote = (id: number) => {
    fetch(`http://5.35.90.63:3005/notes/${id}`, {
      method: 'DELETE',
    }).then(() => setCount(count + 1));
  };

  return (
    <>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <div onClick={() => setActiveNote(note)}>
              {note.title}:{note.content}
            </div>
            <button onClick={() => deleteNote(note.id)}>Удалить пост</button>
          </div>
        ))}
      </div>
      <div className={styles.container} data-color-mode="light">
        <div className={styles.inputBox}>
          <input
            className={styles.title}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            className={styles.content}
            placeholder="Text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <MDEditor value={content} onChange={(value) => setContent(value || '')} />
        </div>
        <div className={styles.note}>
          {activeNote && (
            <div data-color-mode="light">
              <MDEditor.Markdown
                source={activeNote.content}
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </div>
          )}
        </div>
      </div>

      <button onClick={() => addNote()}>Добавить пост</button>
    </>
  );
};
