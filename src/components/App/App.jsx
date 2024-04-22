import { fetchPhotoByQuary } from "../../photos-api";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { ErrorMessage } from "formik";
import Loader from "../Loader/Loader";

function App() {
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setLoading(true);

        const newImg = await fetchPhotoByQuary(query, currentPage);

        setImage((prevImages) => [...prevImages, ...newImg]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, currentPage]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImage([]);
    setcurrentPage(1);
  };

  const handleLoadMore = () => {
    setcurrentPage(currentPage + 1);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const openModal = (url) => {
    setImageUrl(url);
    toggle();
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {image.length > 0 && <ImageGallery images={image} onClick={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {image.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modal && (
        <ImageModal
          image={imageUrl}
          imageModal={modal}
          item={image}
          onModalClose={toggle}
        />
      )}
    </div>
  );
}

export default App;
