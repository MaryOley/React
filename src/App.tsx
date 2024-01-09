import { useState } from 'react';
import { Menu } from './components/Menu/Menu';
import { Home } from './components/Home/Home';
import { Performers } from './components/Performers/Performers';
import { Header } from './components/Header/Header';

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
];

export const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(0);

  return (
    <div>
      <Header>
        <Menu
          items={menu}
          active={currentMenuItem}
          onClickMenuItem={(index) => setCurrentMenuItem(index)}
        ></Menu>
      </Header>
      <div>{menu[currentMenuItem].content}</div>
    </div>
  );
};
