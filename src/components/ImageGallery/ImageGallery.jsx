import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(item => (
        <li key={item.id} className={css.card}>
          <ImageCard
            urls={item.urls}
            alt_description={item.alt_description}
            likes={item.likes}
            user={item.user}
            description={item.description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
