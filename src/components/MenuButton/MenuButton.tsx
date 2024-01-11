import { FC } from 'react';
import { Button, Dropdown, MenuProps } from 'antd';

type Props = {
  menu: MenuProps['items'];
};

export const MenuButton: FC<Props> = ({ menu }) => {
  return (
    <Dropdown menu={{ items: menu }} trigger={['click']}>
      <Button size="small" type="primary" danger>
        menu
      </Button>
    </Dropdown>
  );
};
