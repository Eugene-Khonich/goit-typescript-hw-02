import './App.module.css';
import fetchImg from '../../api';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [lastPage, setLastPage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
  return (
    <div>
      <Toaster />
      <SearchBar setValue={setValue} resetSubmit={resetSubmit} />
      {error && <ErrorMessage errorMessage={errorMessage} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          {!lastPage && <LoadMoreBtn reachPage={reachPage} />}
        </>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default App;
