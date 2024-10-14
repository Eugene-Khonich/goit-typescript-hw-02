import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(item => (
        <li key={item.id}>
          <ImageCard
            urls={item.urls.small}
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
