import { useEffect, useState } from "react";

const apiURL = './src/tutorial/03-conditional-rendering/data.json';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return ;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    // setting fetch the user after 5 seconds
    const timer = setTimeout(
      () => fetchUser(),
      1500
    );

    // clear the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }

  const { name, avatar_url, company, bio } = user;
  return (
    <div>
      <img 
        style={{ width: '150px', borderRadius: '25px' }}
        alt={name}
        src={avatar_url}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;