import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { ImExit } from 'react-icons/im';
import styles from './Navigations.module.css';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={styles.userWrapper}>
      <span className={styles.name}>{name}</span>

      <ImExit
        size="20"
        className={styles.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      />
    </div>
  );
}