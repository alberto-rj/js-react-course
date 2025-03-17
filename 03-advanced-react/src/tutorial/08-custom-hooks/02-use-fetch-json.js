import { useState, useEffect } from 'react';

const useFetchJSON = (apiURL) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, sethasError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          sethasError(true);
          setIsLoading(false);
          return;
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        sethasError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [isLoading, hasError, data];
};

export default useFetchJSON;
