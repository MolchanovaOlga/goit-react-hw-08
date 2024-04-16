import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './ContactsPage.module.css';

import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContactsError,
  selectContactsIsLoading,
} from '../../redux/contacts/selectors';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.formTitleContainer}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
