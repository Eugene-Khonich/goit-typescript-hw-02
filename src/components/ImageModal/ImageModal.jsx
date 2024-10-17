import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'black',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
  },
};

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>{modalDesc}</p>
        <img src={modalImg} alt={modalAlt} />
      </Modal>
    </div>
  );
};
export default ImageModal;
