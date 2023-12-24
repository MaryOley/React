import styles from './ButtonPage.module.scss';
import { Button } from '../../components/Button/Button';

export const ButtonPage = () => {
  return (
    <div>
      <Button size="xs" color="light"></Button>
      <Button size="s" color="dark"></Button>
    </div>
  );
};
