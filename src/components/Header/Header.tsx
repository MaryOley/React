import { useEffect, useState } from 'react';
import style from './Header.module.scss';

export const Header = () => {
  const [temp, setTemp] = useState();

  useEffect(() => {
    fetch(
      'https://openweathermap.org/data/2.5/weather?id=498817&appid=439d4b804bc8187953eb36d2a8c26a02',
    )
      .then((res: any) => res.json())
      .then((obj) => setTemp(obj.main.temp));
  }, []);

  return <div className={style.header}>{temp}</div>;
};
