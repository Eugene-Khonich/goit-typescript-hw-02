import { FC } from 'react';
import { ImageCardProps } from '../types';

const ImageCard: FC<ImageCardProps> = ({
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
        openModal({ likes, urls, description, alt_description, user });
      }}
    />
  );
};

export default ImageCard;
