import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = form.elements.search.value;
    if (data.trim() === "") {
      toast.error("Input is empty!");
      return;
    }
    onSubmit(data.trim());
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
