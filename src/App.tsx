import { Notes } from './components/Notes/Notes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'animate.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Notes />
    </QueryClientProvider>
  );
};
