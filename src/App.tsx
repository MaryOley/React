import { useState } from 'react';
import style from './app.module.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Layout } from './components/Layout/Layout';
import { Menu } from './components/Menu/Menu';
import { SidebarPages } from './pages/SidebarPage/SidebarPages';
import { ModalPage } from './pages/ModalPage/ModalPage';

export const App = () => {
  const menu = [
    {
      title: 'sidebar',
      content: <SidebarPages />,
    },
    { title: 'modal', content: <ModalPage /> },
  ];
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
