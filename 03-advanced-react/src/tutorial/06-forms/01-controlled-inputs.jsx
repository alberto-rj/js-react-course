import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const {
      target: { id, value },
    } = e;
    const inputs = {
      name: setName,
      email: setEmail,
    };
    console.log(e);
    console.log(id, value);
    inputs[id](value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='form'>
      <h4>controlled inputs</h4>
      <div className='form-row'>
        <label
          htmlFor='name'
          className='form-label'
        >
          name
        </label>
        <input
          type='text'
          id='name'
          className='form-input'
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email'>email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleChange}
          className='form-input'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        onClick={handleSubmit}
      >
        submit
      </button>
    </form>
  );
};

export default ControlledInputs;
