import { useEffect, useRef, useState } from "react";

const Track = () => {
  const [inputValue, setInputValue] = useState('');
  const previousInputValue = useRef('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
};

export default Track;