import { NewNote, Note } from '../types/notes';

const create = (data: NewNote) => {
  return fetch('http://5.35.90.63:3005/notes/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const remove = (id: number) => {
  return fetch(`http://5.35.90.63:3005/notes/${id}`, {
    method: 'DELETE',
  });
};

const update = (data: Note) => {
  return fetch(`http://5.35.90.63:3005/notes/update`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getAll = () => {
  return fetch('http://5.35.90.63:3005/notes/all').then((res) => res.json());
};

export const notesApi = {
  create,
  remove,
  update,
  getAll,
};
