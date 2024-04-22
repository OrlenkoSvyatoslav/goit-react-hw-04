const ImageCard = ({
  item: {
    alt_description,
    urls: { small, regular },
  },
  onImgClick,
}) => {
  return (
    <div>
      <div>
        <img
          src={small}
          alt={alt_description}
          onClick={() => onImgClick(regular)}
        />
      </div>
    </div>
  );
};

export default ImageCard;
