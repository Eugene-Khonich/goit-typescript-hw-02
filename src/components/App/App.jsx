import css from './App.module.css';
import fetchImg from '../../api';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [lastPage, setLastPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [modalDesc, setModalDesc] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const [modalUser, setModalUser] = useState('');
  const [modalLikes, setModalLikes] = useState('');

  useEffect(() => {
    const fetchPhotosHandler = async () => {
      try {
        setLoading(true);
        const data = await fetchImg(value, page);
        const results = data.results;
        setLastPage(page >= data.total_pages);
        setImages(prevData => [...prevData, ...results]);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (value) {
      fetchPhotosHandler();
    }
  }, [value, page]);

  useEffect(() => {
    if (lastPage) {
      toast.success('There is all what we find!', {
        position: 'top-center',
        duration: 3000,
      });
    }
  });

  const reachPage = () => {
    setPage(prevData => prevData + 1);
  };

  const resetSubmit = () => {
    setPage(1);
    setValue('');
    setImages([]);
  };

  const openModal = (imgUrl, desc, altDesc, user, likes) => {
    setModalIsOpen(true);
    setModalImg(imgUrl);
    setModalDesc(desc);
    setModalAlt(altDesc);
    setModalUser(user);
    setModalLikes(likes);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar setValue={setValue} resetSubmit={resetSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={errorMessage} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {!lastPage && <LoadMoreBtn reachPage={reachPage} />}
        </>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImg={modalImg}
        modalDesc={modalDesc}
        modalAlt={modalAlt}
        modalUser={modalUser}
        modalLikes={modalLikes}
      />
    </div>
  );
};

export default App;
