import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ setValue, resetSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.input.value.trim();
    if (!inputValue) {
      toast.error('The search field cannot be empty', {
        position: 'top-center',
        duration: 2000,
      });
    } else {
      resetSubmit();
      setValue(inputValue);
      evt.target.reset();
    }
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
