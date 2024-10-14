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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
