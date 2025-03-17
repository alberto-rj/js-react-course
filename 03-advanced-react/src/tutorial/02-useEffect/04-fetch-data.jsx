import { useState, useEffect } from 'react';

const FetchData = () => {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    try {
      const apiURL = 'src/tutorial/02-useEffect/data.json';
      const response = await fetch(apiURL);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
      setUsers(null);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) {
    return (
      <section>
        <h3>Error fetching github users</h3>
      </section>
    );
  } 
  
  if (users.length === 0) {
    return  (
      <section>
        <h3>There is no github users</h3>
      </section>
    );
  }
  
  return (
    <section>
      <h3>github users</h3>
      <ul className='users'>
      {
        users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img 
                src={avatar_url} 
                alt={login} 
                style={{ objectFit: 'cover' }}
              />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })
      }
      </ul>
    </section>
  );
};

export default FetchData;