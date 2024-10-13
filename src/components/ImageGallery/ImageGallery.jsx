import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(item => (
        <li key={item.id}>
          <ImageCard
            urls={item.urls}
            likes={item.likes}
            description={item.description}
            alt_description={item.alt_description}
            user={item.user}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
