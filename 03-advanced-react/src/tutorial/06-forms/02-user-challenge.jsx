import { useState } from 'react';
import { data } from '../../data';

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { id: new Date().now(), name };
    const newUsers = [...users];
    newUsers.push(newUser);
    setUsers(newUsers);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const removeUser = (userId) => {
    const newUsers = users.filter((user) => user.id != userId);
    setUsers(newUsers);
  };

  const handleRemoveClick = (event) => {
    removeUser(event.target.dataset.userId);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='form'
      >
        <h4>add a new user</h4>
        <div className='form-row'>
          <label
            htmlFor='name'
            className='form-label'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            onChange={handleChange}
            value={name}
            className='form-input'
            required
            aria-required='true'
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'
          style={{ marginBottom: '16px' }}
        >
          Submit
        </button>
      </form>
      <h2>current users</h2>
      {users.map(({ name, id }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              data-user-id={id}
              onClick={handleRemoveClick}
              className='btn'
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UserChallenge;
