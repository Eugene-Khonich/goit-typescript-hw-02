import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({
  modalIsOpen,
  closeModal,
  modalImg,
  modalDesc,
  modalAlt,
}) => {
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <p>{modalDesc}</p>
        <img src={modalImg} alt={modalAlt} />
      </Modal>
    </div>
  );
};
export default ImageModal;
