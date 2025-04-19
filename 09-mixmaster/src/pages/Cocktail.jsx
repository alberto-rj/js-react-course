import axios from 'axios';
import { useLoaderData, Link, Navigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/CocktailPage';

const apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${apiURL}${id}`);
  const [listing] = data?.drinks;

  return { listing };
};

const Cocktail = () => {
  const { listing } = useLoaderData();

  if (!listing) {
    return <Navigate to='/' />;
  }

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = listing;

  const validIngredients = Object.keys(listing)
    .filter((key) => key.startsWith('strIngredient') && listing[key] !== null)
    .map((key) => listing[key]);

  const details = [
    { key: 'name', value: name },
    { key: 'category', value: category },
    { key: 'info', value: info },
    { key: 'glass', value: glass },
    { key: 'instructions', value: instructions },
    {
      key: 'ingredients',
      value: validIngredients.map((item, index) => (
        <span
          className='ing'
          key={item}
        >
          {item}
          {index < validIngredients.length - 1 ? ' ,' : ''}
        </span>
      )),
    },
  ];

  return (
    <Wrapper>
      <header>
        <Link
          to='/'
          className='btn'
        >
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img
          src={image}
          alt={name}
          className='img'
        />
        <ul className='drink-info'>
          {details.map(({ key, value }) => (
            <li key={key}>
              <strong className='drink-data'>{key}: </strong>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
