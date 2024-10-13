import './App.module.css';
import fetchIImg from '../../api';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';

const App = () => {
  const [value, setValue] = useState(null);
  const handleSearch = async topic => {
    try {
      const data = await fetchIImg(topic);
      setValue(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery />
    </div>
  );
};

export default App;
