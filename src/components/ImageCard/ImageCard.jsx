const ImageCard = ({
  img: {
    alt_description,
    urls: { small, regular },
  },
  onClick,
}) => {
  console.log(small);
  return (
    <div>
      <img onClick={() => onClick(regular)} src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
