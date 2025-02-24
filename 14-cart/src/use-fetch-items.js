import { useEffect } from 'react';

const useFetchItems = (api, init) => {
  let isLoading = true;
  let hasError = false;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(api, init);
        if (!response.ok) {
          hasError = true;
          isLoading = false;
          return;
        }
        isLoading = false;
      } catch (error) {
        hasError = true;
        isLoading = false;
      }
    })();
  }, []);
};

export default useFetchItems;
