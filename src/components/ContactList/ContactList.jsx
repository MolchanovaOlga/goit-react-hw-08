import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = idContact => {
    dispatch(deleteContact(idContact));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <Contact
              id={id}
              name={name}
              phone={number}
              handleDelete={handleDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
