import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const fetchData = async (url) => {
  try {
    const response = await axios(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const useFetch = (initialState) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchDadJoke = async () => {
      const response = await fetchData(url);
      setState(response?.data);
    };

    fetchDadJoke();
  }, []);

  return { state, setState };
};

const Headers = () => {
  const { state, setState } = useFetch('random dad joke');
  const { joke } = state;

  const handleClick = () => {
    const fetchDadJoke = async () => {
      const response = await fetchData(url);
      setState(response?.data);
    };
    fetchDadJoke();
  };

  return (
    <section className='section text-center'>
      <button
        className='btn'
        onClick={handleClick}
      >
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
