import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { FC } from 'react';
import { ImageModalProps } from '../types';

Modal.setAppElement('#root');

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  modalImgInfo,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName={css.overlay}
      className={css.content}
    >
      <img
        src={modalImgInfo?.urls.regular}
        alt={modalImgInfo?.alt_description}
        className={css.img}
      />
      <button className={css.btn} onClick={closeModal}>
        ✖
      </button>
      <ul className={css.list}>
        <line>
          Description : <br />
          {modalImgInfo?.description}
        </line>
        <li>
          Autor : <br />
          {modalImgInfo?.user.first_name} {modalImgInfo?.user.last_name}
        </li>
        <li>
          {modalImgInfo?.likes} <span className={css.span}>❤</span>
        </li>
      </ul>
    </Modal>
  );
};
export default ImageModal;
