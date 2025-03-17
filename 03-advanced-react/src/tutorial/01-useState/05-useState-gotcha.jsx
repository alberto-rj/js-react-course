import { useState } from "react"

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleClick = (e) => {
    setTimeout(() => {
      console.log('clicked the button');
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button 
        className="btn" 
        onClick={handleClick}
      >
        increment
      </button>
    </div>
  );
};

export default UseStateGotcha;