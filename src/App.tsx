import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/Menu';
import { User } from './components/Users/User';
import { UserPage } from './pages/UserPage/UserPage';

const menu = [
  { title: <User />, content: <UserPage /> },
  { title: <User />, content: 'user huyzer' },
  { title: <User />, content: 'user huyzer' },
  { title: <User />, content: 'user huyzer' },
  { title: <User />, content: 'user huyzer' },
];

export const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  return (
    <>
      <Layout
        sidebarContent={
          <Menu
            items={menu}
            active={currentMenuItem}
            onClickMenuItem={(index) => setCurrentMenuItem(index)}
          ></Menu>
        }
      >
        {menu[currentMenuItem].content}
      </Layout>
    </>
  );
};
