import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FC, FormEvent } from 'react';
import { SearchBarProps } from '../types';

const SearchBar: FC<SearchBarProps> = ({ setValue, resetSubmit }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const inputValue = (evt.target as HTMLFormElement).elements.namedItem(
      'input'
    ) as HTMLInputElement;
    const value = inputValue.value.trim();
    if (!value) {
      toast.error('The search field cannot be empty', {
        position: 'top-center',
        duration: 2000,
      });
    } else {
      resetSubmit();
      setValue(value);
      (evt.target as HTMLFormElement).reset();
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
