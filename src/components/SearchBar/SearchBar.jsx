import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === '') {
      toast.error('The search field cannot be empty', {
        position: 'top-center',
        duration: 2000,
      });
    } else {
      onSubmit(topic);
      form.reset();
    }
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
