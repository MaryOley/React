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
    content: <Accardion title="Accardion" content="Accardion content" />,
  },
  {
    title: 'CrossAndZero',
    content: <CrossAndZero />,
  },
];

export const App = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Layout
        sidebarContent={
          <Menu
            items={menu}
            active={active}
            onClickMenuItem={(index) => setActive(index)}
          ></Menu>
        }
      >
        {menu[active].content}
      </Layout>
    </>
  );
};
