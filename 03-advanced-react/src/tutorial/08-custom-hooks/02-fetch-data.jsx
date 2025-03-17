import useFetchJSON from './02-use-fetch-json';

const apiURL = 'https://api.github.com/users/alberto-rj';

const FetchData = () => {
  const [isLoading, hasError, user] = useFetchJSON(apiURL);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (hasError) {
    return <h2>There was an error...</h2>;
  }

  const { avatar_url, name, company, bio } = user;

  const avatarStyles = {
    width: '100px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '25px',
  };

  return (
    <div>
      <img
        style={avatarStyles}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      {company && <h4>works at {company}</h4>}
      {bio && <p>{bio}</p>}
    </div>
  );
};

export default FetchData;
