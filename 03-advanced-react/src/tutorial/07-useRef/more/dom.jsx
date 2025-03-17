import { useRef } from "react";

const DOM = () => {
  const inputElement = useRef();
  
  const focusInput = () => {
    inputElement.current.focus();
  };
  
  return (
    <form className="form">
      <input 
        type="text" 
        ref={inputElement} 
        className="form-input"
      />
      <button
        onClick={focusInput} 
        className="btn btn-block"
      >
        Focus Input
      </button>
    </form>
  );
};

export default DOM;