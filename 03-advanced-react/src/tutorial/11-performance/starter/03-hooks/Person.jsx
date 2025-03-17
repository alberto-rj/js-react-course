import { useEffect } from 'react';

const Person = ({ name }) => {
  // useEffect(() => {
  //   console.log('Unfortunately does not fix the issue');
  // });

  console.log('Person render');
  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

export default Person;
