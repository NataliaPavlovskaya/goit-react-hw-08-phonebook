import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { IoHome } from 'react-icons/io5';
import { ImListNumbered } from 'react-icons/im';
import styles from './Navigations.module.css';

export default function Navigations() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const screenWidth = window.innerWidth;

  return (
    <nav className={styles.nav}>
      <NavLink className={styles.link} to="/">
        <IoHome size="20" />
      </NavLink>
      {isAuthenticated && (
        <NavLink className={styles.link} to="/contacts">
          {screenWidth <= 767 ? <ImListNumbered /> : 'Контакты'}
        </NavLink>
      )}
    </nav>
  );
}