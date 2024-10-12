import './App.module.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import fetchIImg from '../../api';
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
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
