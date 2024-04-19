import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

import css from './EditFormModal.module.css';

Modal.setAppElement('#root');

const EditFormModal = ({
  isOpen,
  closeModal,
  data,
  handleChangeName,
  handleChangeNumber,
  handleSave,
}) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.backdrop}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <button className={css.modalCloseBtn} onClick={closeModal}>
        <IoMdClose className={css.modalCloseIcon} />
      </button>
      <form className={css.modalForm}>
        <label className={css.label}>
          Name:
          <input
            className={css.input}
            type="text"
            value={data.name}
            onChange={handleChangeName}
          />
        </label>
        <label className={css.label}>
          Number:
          <input
            className={css.input}
            type="text"
            value={data.number}
            onChange={handleChangeNumber}
            autoFocus
          />
        </label>
        <div className={css.buttonContainerModal}>
          <button type="submit" className={css.modalBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditFormModal;
