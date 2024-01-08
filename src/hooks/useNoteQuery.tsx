import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { notesApi } from '../components/api/notes';
import { Note } from '../components/types/notes';

export const useGetNotesQuery = () => {
  const query = useQuery<Note[]>({
    queryKey: ['notes'],
    queryFn: notesApi.getAll, // функция обращающаяся к серверу
  });

  return query;
};

export const useAddNoteQuery = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: notesApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  return mutate;
};

export const useDeleteNoteQuery = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: notesApi.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  return mutate;
};

export const useUpdateNoteQuery = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: notesApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
  });

  return mutate;
};
