import { Link, useOutletContext } from 'react-router-dom';

import Wrapper from '../assets/wrappers/CocktailCard';

const ListingCard = ({ id, image, name, info, glass }) => {
  // const data = useOutletContext();
  // console.log(data);

  return (
    <Wrapper>
      <div className='image-wrapper'>
        <img
          src={image}
          alt={name}
          className='image'
        />
      </div>
      <div className='footer'>
        <h4 className='name'>{name}</h4>
        <h5 className='glass'>{glass}</h5>
        <p className='info'>{info}</p>

        <Link
          to={`/cocktail/${id}`}
          className='btn'
        >
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default ListingCard;
