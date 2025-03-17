import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Counter from './Counter';

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <main className='container'>
      <h1>Performance</h1>
      <Counter />
      <List people={people} />
    </main>
  );
};

export default LowerState;
