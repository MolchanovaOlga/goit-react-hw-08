import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { LuFileEdit } from 'react-icons/lu';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import css from './Contact.module.css';
import { notifySuccessfull } from '../../services/notifications';
import { editContact } from '../../redux/contacts/operations';
import EditFormModal from '../EditFormModal/EditFormModal';
import scrollController from '../../services/noScroll';

const Contact = ({ name, number, id, handleDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({ id, name, number });

  const dispatch = useDispatch();

  const handleClickDelete = () => {
    if (
      window.confirm(
        `Do you really want to delete this contact?\n${name} ${number}`
      )
    ) {
      handleDelete(id);
      notifySuccessfull('You deleted the contact.');
    } else {
      return;
    }
  };

  const handleClickSaveEdition = () => {
    dispatch(editContact(editedContact));
    notifySuccessfull(`Contact ${name}  has been updated successfully.`);
  };

  const handleChangeName = ev =>
    setEditedContact({ ...editedContact, name: ev.target.value });

  const handleChangeNumber = ev =>
    setEditedContact({ ...editedContact, number: ev.target.value });

  function openModal() {
    setModalIsOpen(true);
    scrollController.disabledScroll();
  }

  function closeModal() {
    setModalIsOpen(false);
    scrollController.enabledScroll();
  }

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>
          <MdPerson className={css.icon} />
          {name}
        </h2>
        <p className={css.text}>
          <MdPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.btnsContainer}>
        <button
          className={css.btn}
          type="button"
          aria-label="Button for edit contact"
          onClick={openModal}
        >
          <LuFileEdit className={css.editIcon} />
        </button>
        <button
          className={css.btn}
          type="button"
          aria-label="Button for delete contact"
          onClick={handleClickDelete}
        >
          <RiDeleteBin2Line className={css.deleteIcon} />
        </button>
      </div>

      <EditFormModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        data={editedContact}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handleSave={handleClickSaveEdition}
      />
    </>
  );
};

export default Contact;
