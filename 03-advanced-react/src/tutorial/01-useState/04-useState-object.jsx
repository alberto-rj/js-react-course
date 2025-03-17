import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name: 'Peter',
      age: 24,
      hobby: 'read books'
    }
  );
  const { name, age, hobby } = person;
  
  const displayPerson = () => {
    setPerson({
      name: 'john',
      age: 28,
      hobby: 'scream at the computer'
    });
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys To: {hobby}</h4>
      <button 
        className="btn" 
        onClick={displayPerson}
      >
        show john
      </button>
    </>
  )
};

export default UseStateObject;