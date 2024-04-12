import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

const Contacts = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
