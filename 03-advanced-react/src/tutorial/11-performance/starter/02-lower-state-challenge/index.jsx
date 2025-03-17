import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Form from './Form';

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const newPerson = { id: Date.now(), name };
    const newPeople = [...people, newPerson];
    setPeople(newPeople);
  };

  return (
    <main className='container'>
      <Form addPerson={addPerson} />
      <List people={people} />
    </main>
  );
};

export default LowerStateChallenge;
