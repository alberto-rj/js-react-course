import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomUserResponse = await axios.get(randomUserUrl);
        console.log(randomUserResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance 2</h2>;
};
export default GlobalInstance;
