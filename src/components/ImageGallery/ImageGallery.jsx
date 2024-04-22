import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, onImgClick }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ImageCard onImgClick={onImgClick} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
