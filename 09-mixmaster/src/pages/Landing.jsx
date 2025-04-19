import { useLoaderData } from 'react-router-dom';
import api from '../libs/api';

export const loader = async () => {
  const searchTerm = 'margarita';
  const response = await api.get('/api/json/v1/1/search.php', {
    params: { s: searchTerm },
  });
  return { listings: response.data?.drinks, searchTerm };
};

const Landing = () => {
  const { searchTerm, listings } = useLoaderData();
  console.log(listings);
  return <h1>Landing page</h1>;
};

export default Landing;
