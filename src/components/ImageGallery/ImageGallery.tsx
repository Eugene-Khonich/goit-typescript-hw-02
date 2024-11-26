import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { FC } from 'react';
import { ImageGalleryProps } from '../types';

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images?.map(item => (
        <li key={item.id} className={css.card}>
          <ImageCard
            urls={item.urls || { small: '', regular: '' }}
            alt_description={item.alt_description}
            likes={item.likes}
            user={item.user || { first_name: '', last_name: '' }}
            description={item.description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
