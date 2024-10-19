const ImageCard = ({
  urls,
  likes,
  description,
  alt_description,
  user,
  openModal,
}) => {
  return (
    <img
      src={urls.small}
      alt={alt_description}
      onClick={() => {
        openModal(urls.regular, description, alt_description, user, likes);
      }}
    />
  );
};

export default ImageCard;
