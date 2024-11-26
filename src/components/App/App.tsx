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
import { ImgDetails, ModalImageData } from '../types';
import { FC } from 'react';

const App: FC = () => {
  const [images, setImages] = useState<ImgDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>('');
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImgInfo, setModalImgInfo] = useState<ModalImageData>();

  useEffect(() => {
    const fetchPhotosHandler = async () => {
      try {
        setLoading(true);
        const data = await fetchImg(value, page);
        const results: ImgDetails[] = data.results;
        setLastPage(page >= data.total_pages);
        setImages(prevData => [...prevData, ...results]);
      } catch (error) {
        setError(true);
        setErrorMessage((error as Error).message);
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

  const reachPage = (): void => {
    setPage(prevData => prevData + 1);
  };

  const resetSubmit = (): void => {
    setPage(1);
    setValue('');
    setImages([]);
  };

  const openModal = (modalImgInfo: ModalImageData): void => {
    setModalIsOpen(true);
    setModalImgInfo(modalImgInfo);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <Toaster />
      <SearchBar setValue={setValue} resetSubmit={resetSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage error={errorMessage} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {!lastPage && <LoadMoreBtn reachPage={reachPage} />}
        </>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImgInfo={modalImgInfo}
      />
    </div>
  );
};

export default App;
