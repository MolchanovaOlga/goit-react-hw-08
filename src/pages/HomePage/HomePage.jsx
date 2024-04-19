import { GiNotebook } from 'react-icons/gi';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

import css from './HomePage.module.css';

import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to the Phonebook!</h1>
        <div className={css.textContainer}>
          <GiNotebook className={css.icon} />
          <h2 className={css.text}>Add your contacts to the Phonebook.</h2>
        </div>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.iconContainer}>
              <IoCheckmarkCircleSharp className={css.checkIcon} />
            </div>
            <p>Log in or register.</p>
          </li>
          <li className={css.item}>
            <div className={css.iconContainer}>
              <IoCheckmarkCircleSharp className={css.checkIcon} />
            </div>
            <p>Create a new contact by name and phone number.</p>
          </li>
          <li className={css.item}>
            <div className={css.iconContainer}>
              <IoCheckmarkCircleSharp className={css.checkIcon} />
            </div>
            <p>Use the contact search by name or number.</p>
          </li>
          <li className={css.item}>
            <div className={css.iconContainer}>
              <IoCheckmarkCircleSharp className={css.checkIcon} />
            </div>
            <p>Edit a contact's name or number.</p>
          </li>
          <li className={css.item}>
            <div className={css.iconContainer}>
              <IoCheckmarkCircleSharp className={css.checkIcon} />
            </div>
            <p>Delete the unnecessary contact.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
