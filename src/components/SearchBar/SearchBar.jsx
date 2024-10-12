const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === '') {
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
