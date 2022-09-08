import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContacts } from '../../redux/contacts/contacts-operations';
import styles from './ContactModal.module.css';
import { FaRegWindowClose } from 'react-icons/fa';

export default function ContactModal({ contactData, onCloseModal }) {
  const { contact, id } = contactData;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handlePressEsc = e => {
      if (e.code === 'Escape') {
        onCloseModal(false);
      }
    };

    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  });

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const handleSave = () => {
    const updateContact = {
      name: name ? name : contact.name,
      number: number ? number : contact.number,
    };
    dispatch(editContacts(id, updateContact));
    onCloseModal(false);
  };

  return (
    <div className={styles.overlay} onClick={e => handleBackDropClick(e)}>
      <div className={styles.modal}>
        <button
          className={styles.close}
          type="button"
          onClick={() => onCloseModal(false)}
        >
          <FaRegWindowClose size="30" className={styles.closeIcon} />
        </button>
        <form className={styles.form}>
          <div className="inputWrapper">
            <label htmlFor="editName"></label>
            <input
              className="input"
              type="text"
              name="name"
              id="editName"
              value={name}
              placeholder={contact.name}
              onChange={({ target: { value } }) => setName(value)}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="editNumber"></label>
            <input
              className="input"
              type="tel"
              name="number"
              id="editNamber"
              value={number}
              placeholder={contact.number}
              onChange={({ target: { value } }) => setNumber(value)}
            />
          </div>

          <button className="button" type="button" onClick={handleSave}>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}