import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({
  modalIsOpen,
  closeModal,
  modalImg,
  modalDesc,
  modalAlt,
  modalUser,
  modalLikes,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName={css.overlay}
      className={css.content}
    >
      <img src={modalImg} alt={modalAlt} className={css.img} />
      <button className={css.btn} onClick={closeModal}>
        ✖
      </button>
      <ul className={css.list}>
        <line>
          Description : <br />
          {modalDesc}
        </line>
        <li>
          Autor : <br />
          {modalUser.first_name} {modalUser.last_name}
        </li>
        <li>
          {modalLikes} <span className={css.span}>❤</span>
        </li>
      </ul>
    </Modal>
  );
};
export default ImageModal;
