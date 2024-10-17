import css from './ImageCard.module.css';

const ImageCard = ({
  urls,
  likes,
  description,
  alt_description,
  user,
  openModal,
}) => {
  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => {
          openModal(urls.regular, description, alt_description);
        }}
      />
      <ul>
        <li>
          {user.first_name} {user.last_name}
        </li>
        <li>{likes}</li>
      </ul>
    </div>
  );
};

export default ImageCard;
