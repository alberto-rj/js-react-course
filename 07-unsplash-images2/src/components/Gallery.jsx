import { useAppContext } from '../context';
import useSearch from '../hooks/useSearch';

const Gallery = () => {
  const { search } = useAppContext();
  const { isPending, isError, data } = useSearch();

  if (isPending) {
    return (
      <div className='content-center'>
        <div className='loading'></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='content-center'>
        <p>Something went wrong! Please try again or later.</p>
      </div>
    );
  }

  if (data.total === 0) {
    return (
      <div className='content-center'>
        <p>No image match to {`"${search}"`}</p>
      </div>
    );
  }

  return (
    <div className='image-container'>
      {data.results
        .slice(0, 12)
        .map(({ id, alt_description, urls: { regular } }) => (
          <img
            key={id}
            alt={alt_description}
            src={regular}
            className='img'
          />
        ))}
    </div>
  );
};

export default Gallery;
