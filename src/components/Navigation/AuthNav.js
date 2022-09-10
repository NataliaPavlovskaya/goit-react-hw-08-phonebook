import { NavLink } from 'react-router-dom';
import styles from './Navigations.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink className={styles.link} to="/register">
        Зареєструватися
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Увійти
      </NavLink>
    </>
  );
}