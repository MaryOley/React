import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/Menu';
import { SidebarPages } from './pages/SidebarPage/SidebarPages';
import { ModalPage } from './pages/ModalPage/ModalPage';
import { CrossAndZero } from './components/CrossAndZero/CrossAndZero';
import { ButtonPage } from './pages/ButtonPage/ButtonPage';
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
