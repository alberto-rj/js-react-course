import { memo } from 'react';
import Person from './Person';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <Person
          key={person.id}
          {...person}
        />
      ))}
    </>
  );
};

export default memo(List);
