import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log('Hello from useEffect');
    setCalculation(() => count * 2);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
};

export default Counter;