import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const MultipleInputs = () => {
  const [user, setUser] = useState(initialState);

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser(initialState);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        className='form'
      >
        <h4>Multiple inputs</h4>
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
            name='name'
            aria-required='true'
            required
            value={user.name}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <label
            htmlFor='email'
            className='form-label'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            aria-required='true'
            required
            value={user.email}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <label
            htmlFor='password'
            className='form-label'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            aria-required='true'
            required
            value={user.password}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultipleInputs;
