import { useEffect, useState } from 'react';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <div className={style.header}>
      <div>Исполнители</div>
      <div>Жанры</div>
      <div>Альбомы</div>
      <input></input>
    </div>
  );
};
