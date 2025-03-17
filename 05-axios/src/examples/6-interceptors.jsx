import { useEffect } from 'react';
import { authFetch } from '../axios/interceptors';

const url = 'https://www.course-api.com/react-store-products';

const Interceptors = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        authFetch(url);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
