import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((people) => setPeople(people))
      .catch((error) => console.log(error.message));
  }, [url]);

  return [people];
};

export default useFetch;