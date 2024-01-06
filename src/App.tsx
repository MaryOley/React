import { useEffect, useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Home/Home';
import { Performers } from './components/Performers/Performers';
import { Notes } from './components/Notes/Notes';

const menu = [
  {
    title: 'Главная',
    content: <Home />,
  },
  {
    title: 'Исполнители',
    content: <Performers />,
  },
  {
    title: 'Жанры',
    content: <div />,
  },
  {
    title: 'Альбомы',
    content: <div />,
  },
  {
    title: 'Конспекты',
    content: <Notes />,
  },
];

export const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(4);

  return (
    <Layout
      menuContent={
        <Menu
          items={menu}
          active={currentMenuItem}
          onClickMenuItem={(index) => setCurrentMenuItem(index)}
        ></Menu>
      }
    >
      {menu[currentMenuItem].content}
    </Layout>
  );
};
