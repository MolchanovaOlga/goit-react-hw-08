import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

import css from './Contact.module.css';

const Contact = ({ name, phone, id, handleDelete }) => {
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
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
