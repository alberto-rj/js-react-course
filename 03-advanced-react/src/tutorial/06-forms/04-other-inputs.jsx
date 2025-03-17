import { useState } from 'react';

const initialState = {
  react: true,
  svelte: false,
  vue: false,
};

const frameworks = ['React', 'Angular', 'Svelte', 'Vue'];

const OtherInputs = () => {
  const [state, setState] = useState(initialState);
  const [framework, setFramework] = useState('React');

  const handleCheckbox = (e) => {
    const {
      target: { id, checked },
    } = e;
    setState({
      ...state,
      [id]: checked,
    });
  };

  const handleSelect = (e) => {
    setFramework(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='form'
      >
        <div className='form-row'>
          <label>
            <input
              type='checkbox'
              name='framework'
              id='react'
              onChange={handleCheckbox}
              checked={state.react}
              value='React'
            />
            React
          </label>
        </div>
        <div className='form-row'>
          <label>
            <input
              type='checkbox'
              id='vue'
              name='framework'
              onChange={handleCheckbox}
              checked={state.vue}
              value='Vue'
            />
            Vue
          </label>
        </div>
        <div className='form-row'>
          <label>
            <input
              type='checkbox'
              id='svelte'
              name='framework'
              onChange={handleCheckbox}
              checked={state.svelte}
              value='Svelte'
            />
            Svelte
          </label>
        </div>
        <div className='form-row'>
          <label htmlFor='framework'>Select Framework</label>
          <select
            id='framework'
            onChange={handleSelect}
            value={framework}
            className='form-input'
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
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

export default OtherInputs;
