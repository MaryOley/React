import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/Menu';
import { User } from './components/Users/User';
import { UserPage } from './pages/UserPage/UserPage';
import { List } from './components/List/List';
import { createArray } from './helpers/utils';

import styles from './app.module.scss';
import { Search } from './components/Search/Search';

const users = createArray((index) => {
  return {
    id: 'User' + (index + 1),
    name: 'User' + (index + 1),
    email: 'dawdawd',
    imgUrl: '/src/components/img/user.jpg',
  };
}, 100);

type User = {
  id: string;
  name: string;
  email: string;
  imgUrl: string;
};

export const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [searchIndex, setSearchIndex] = useState<number | null>(null);

  return (
    <>
      <Layout
        sidebarContent={
          <>
            <Search
              items={users}
              searchFn={(value, user) => user.name.includes(value)}
              renderItem={(user) => user.name}
              onClickResult={(user) => {
                const index = users.findIndex((u) => u.name === user.name);

                if (index >= 0) {
                  setSearchIndex(index);
                }

                setUser(user);
              }}
            />
            <List
              items={users}
              isActive={(u) => u.id === user?.id}
              onClickItem={(user) => setUser(user)}
              renderItem={(user) => (
                <User name={user.name} email={user.email} imgUrl={user.imgUrl} />
              )}
              scrollIndex={searchIndex}
            />
          </>
        }
      >
        {user?.name}
      </Layout>
    </>
  );
};
