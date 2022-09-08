import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';
import propTypes from 'prop-types';
import s from '../ContactList/ContactList.module.css';
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';

export default function ContactsList({ onOpenModal }) {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.nameText}>
              {name}: <span>{number}</span>
            </p>
            <div>
              <button
                className={s.button}
                type="button"
                onClick={() => onOpenModal({ name, number }, id)}
              >
                <FaUserEdit size="20" />
              </button>
              <button
                className={s.button}
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                <FaTrashAlt size="20" className={styles.delete} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactsList.propTypes = {
  onDeleteBtn: propTypes.func,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    }),
  ),
};