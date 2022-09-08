import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { FaUserEdit, FaTrashAlt } from 'react-icons/fa';

import styles from './ContactList.module.css';
import propTypes from 'prop-types';


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
                className={styles.button}
                type="button"
                onClick={() => onOpenModal({ name, number }, id)}
              >
                <FaUserEdit size="20" />
              </button>
              <button
                className={styles.button}
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