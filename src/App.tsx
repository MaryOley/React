import { useState } from 'react';
import style from './app.module.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/Menu';
import { SidebarPages } from './pages/SidebarPage/SidebarPages';
import { ModalPage } from './pages/ModalPage/ModalPage';
import { Button } from './components/Button/Button';
import { Accardion } from './components/Accardion/Accardion';
import { CrossAndZero } from './components/CrossAndZero/CrossAndZero';
import { ButtonPage } from './pages/ButtonPage/ButtonPage';
import { Slider } from './components/Slider/Slider';
import { SliderPage } from './pages/SliderPage/SliderPage';
import { AccardionPage } from './pages/AccardionPage/AccardionPage';

const menu = [
  {
    title: 'Sidebar',
    content: <SidebarPages />,
  },
  {
    title: 'Modal',
    content: <ModalPage />,
  },
  {
    title: 'Button',
    content: <ButtonPage />,
  },
  {
    title: 'Accardion',
    content: <AccardionPage />,
  },
  {
    title: 'CrossAndZero',
    content: <CrossAndZero />,
  },
  {
    title: 'Slider',
    content: <SliderPage />,
  },
];

export const App = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(5);

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
