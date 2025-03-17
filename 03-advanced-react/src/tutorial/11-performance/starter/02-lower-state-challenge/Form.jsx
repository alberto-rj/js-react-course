import { useState } from 'react';

const Form = ({ addPerson }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please Provide Name Value');
      return;
    }

    addPerson(name);
    setName('');
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
    >
      <div className='form-row'>
        <label
          htmlFor='name'
          className='form-label'
        >
          name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-input'
          value={name}
          onChange={handleChange}
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
      >
        submit
      </button>
    </form>
  );
};

export default Form;
