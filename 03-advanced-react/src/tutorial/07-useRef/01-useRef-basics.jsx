import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [count, setCount] = useState(0);

  const nameInputRef = useRef(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    console.log('re-render');
  }, [count]);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.currentTarget.reset();
    nameInputRef.current.focus();
  };

  const handleCount = (e) => {
    setCount(count + 1);
  };

  return (
    <div className='section-center'>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
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
            className='form-input'
            ref={nameInputRef}
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'
        >
          submit
        </button>
      </form>
      <div>
        <h4>value : {count}</h4>
        <button
          onClick={handleCount}
          className='btn'
        >
          increase
        </button>
      </div>
    </div>
  );
};

export default UseRefBasics;
