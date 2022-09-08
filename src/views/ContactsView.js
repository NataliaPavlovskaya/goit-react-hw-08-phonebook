import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import {
  getContacts,
  getIsLoading,
} from '../redux/contacts/contacts-selectors';
import {Oval} from 'react-loader-spinner';
import Section from '../components/Layout/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import ContactModal from '../components/ContactModal/ContactModal';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editContact, setEditContact] = useState({});

  const handleOpenModal = (contact, id) => {
    setIsOpenModal(true);
    setEditContact({ contact, id });
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Введите имя и номер">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {isLoading ? (
          <Oval height={40}
              width={40}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2} />
      ) : null}
      </div>

      <ContactForm />

      {contacts.length ? (
        <Section title="Контакты">
          <Filter />
          <ContactsList onOpenModal={handleOpenModal} />
          {isOpenModal && (
            <ContactModal
              onCloseModal={setIsOpenModal}
              contactData={editContact}
            />
          )}
        </Section>
      ) : null}
    </Section>
  );
}