import { useState } from 'react';
import style from './Sidebar.module.scss';

type Props = {};

export const Sidebar = (props: Props) => {
    const [count, setCount] = useState(0);

    return (<div>sidebar</div>)
}