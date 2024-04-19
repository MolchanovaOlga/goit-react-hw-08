import { useDispatch, useSelector } from 'react-redux';

import css from './ContactList.module.css';

import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = idContact => {
    dispatch(deleteContact(idContact));
  };

  return (
    <>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li className={css.item} key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  handleDelete={handleDeleteContact}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.text}>There are no contacts in your Phonebook yet.</p>
      )}
    </>
  );
};

export default ContactList;
