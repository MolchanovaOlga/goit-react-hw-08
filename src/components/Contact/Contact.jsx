import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { Toaster } from 'react-hot-toast';

import css from './Contact.module.css';
import { notifySuccessfull } from '../../services/notifications';

const Contact = ({ name, phone, id, handleDelete }) => {
  const handleClick = () => {
    if (
      window.confirm(
        `Do you really want to delete this contact?\n${name} ${phone}`
      )
    ) {
      handleDelete(id);
      notifySuccessfull('You deleted the contact.');
    } else {
      return;
    }
  };

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <MdPerson className={css.icon} />
          {name}
        </p>
        <p className={css.text}>
          <MdPhone className={css.icon} />
          {phone}
        </p>
      </div>
      <button
        type="button"
        aria-label="Button for delete contact"
        onClick={handleClick}
      >
        Delete
      </button>
      <Toaster />
    </>
  );
};

export default Contact;
