import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const styles = {
    marginBottom: '1rem',
  };

  return (
    <button
      className='btn'
      onClick={handleClick}
      style={styles}
    >
      count {count}
    </button>
  );
};

export default Counter;
