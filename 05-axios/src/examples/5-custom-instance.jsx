import { useEffect } from 'react';

import { authFetch } from '../axios/custom';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const secondResponse = await authFetch('/react-store-products');
        const firstResponse = await axios(randomUserUrl);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
