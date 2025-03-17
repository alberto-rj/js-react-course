import { useState } from 'react';

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());
    console.log(newUser);
    setValue(value + 1);
    form.reset();
  };

  return (
    <>
      <div>
        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <h3>FormData API</h3>
          <div className='form-row'>
            <label
              htmlFor='name'
              className='form-label'
            >
              Name
            </label>
            <input
              id='name'
              name='name'
              type='text'
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
              id='email'
              name='email'
              type='email'
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
              id='password'
              name='password'
              type='password'
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
    </>
  );
};

export default UncontrolledInputs;
