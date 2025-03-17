import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('hello from first useEffect');
  }, [firstValue]);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

  return (
    <div>
      <h1>first value: {firstValue}</h1>
      <button 
        className='btn' 
        onClick={() => setFirstValue(firstValue + 1)}
      >
        increment first value
      </button>
      <br /><br /><br />
      <h1>second value: {secondValue}</h1>
      <button 
        className='btn' 
        onClick={() => setSecondValue(secondValue + 1)}
      >
        increment second value
      </button>
    </div>
  );
};

export default MultipleEffects;