import { ListingCard } from './';
import Wrapper from '../assets/wrappers/CocktailList';

const ListingList = ({ listing }) => {
  if (!listing) {
    return <h1>No matching cocktails found...</h1>;
  }

  return (
    <Wrapper>
      {listing.map(
        ({
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
        }) => (
          <ListingCard
            key={id}
            {...{ id, name, image, info, glass }}
          />
        )
      )}
    </Wrapper>
  );
};

export default ListingList;
