import useFetchJSON from './02-use-fetch-json';

const useFetchUser = (apiURL) => {
  const [isLoading, hasError, user] = useFetchJSON(apiURL);
  return [isLoading, hasError, user];
};

export default useFetchUser;
