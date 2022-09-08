import Navigations from './Navigations';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import styles from './Navigations.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigations />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}