import css from './App.module.css';
import fetchImg from '../../api';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImgInfo } from '../types';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [images, setImages] = useState<ImgInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>('');
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<string>('');
  const [modalDesc, setModalDesc] = useState<string>('');
  const [modalAlt, setModalAlt] = useState<string>('');
  const [modalUser, setModalUser] = useState<string>('');
  const [modalLikes, setModalLikes] = useState<number | undefined>(0);

  useEffect(() => {
    const fetchPhotosHandler = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImg(value, page);
        const results = data.results;
        setLastPage(page >= data.total_pages);
        setImages(prevData => [...prevData, ...results]);
      } catch (error) {
        if (error instanceof Error) {
          setError(true);
          setErrorMessage(error.message);
        } else {
          return 'Unknown error';
        }
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

  const openModal = (
    imgUrl: string,
    desc: string,
    altDesc: string,
    user: string,
    likes: number
  ) => {
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
