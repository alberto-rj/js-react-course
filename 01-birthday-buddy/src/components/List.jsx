import { Person } from './';

const List = ({ people }) => {
  return (
    <div className='person-wrapper'>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
          />
        );
      })}
    </div>
  );
};

export default List;
