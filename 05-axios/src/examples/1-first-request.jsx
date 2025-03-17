import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios(url);
        console.log('first axios request');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
