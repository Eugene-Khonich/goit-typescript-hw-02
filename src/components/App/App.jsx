import './App.module.css';
import fetchIImg from '../../api';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
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
  const [value, setValue] = useState(null);

  const onSubmit = searchValue => {
    setValue(searchValue);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const data = await fetchIImg(value, page);
        const results = data.results;
        setImages(prevData => [...prevData, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }),
    [];

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={onSubmit} setValue={setValue} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} /> <LoadMoreBtn />
        </>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default App;
