import toast, { Toaster } from "react-hot-toast";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  const onSubmitBar = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const data = form.elements.topic.value;
    if (data.trim() === "") {
      toast.error("Input is empty!");
      return;
    }
    onSubmit(data.trim());
    form.reset();
  };

  return (
    <header>
      <form onSubmit={onSubmitBar}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit">
          <IoIosSearch /> Search
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
