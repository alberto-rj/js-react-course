import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const styles = {
    marginBottom: '1rem',
  };

  return (
    <main className='container'>
      <h1>Performance</h1>
      <button
        className='btn'
        onClick={handleClick}
        style={styles}
      >
        count {count}
      </button>
      <List people={people} />
    </main>
  );
};

export default LowerState;
