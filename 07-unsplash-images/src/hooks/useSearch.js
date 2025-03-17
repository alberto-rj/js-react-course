import { useQuery } from '@tanstack/react-query';
import { useAppContext } from '../context';
import api from '../lib/api';

const useSearch = () => {
  const { search } = useAppContext();

  const result = useQuery({
    queryKey: ['photos', search],
    queryFn: async () => {
      const { data } = await api.get(`/search/photos?query=${search}`);
      return data;
    },
  });

  const { isPending, isError, data } = result;

  return {
    isPending,
    isError,
    data,
  };
};

export default useSearch;
