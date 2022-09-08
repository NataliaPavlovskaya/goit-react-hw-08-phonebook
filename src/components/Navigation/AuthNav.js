import { NavLink } from 'react-router-dom';
import styles from './Navigations.module.css';

export default function AuthNav() {
  return (
    <>
      <NavLink className={styles.link} to="/register">
        Регистрация
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Войти
      </NavLink>
    </>
  );
}