import { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState(
    'The content of a textarea goes in the value attribute'
  );

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(text);

  return (
    <div>
      <h1>Textarea</h1>
      <form 
        className="form" 
        onSubmit={handleSubmit}
      >
        <div className="form-row">
          <textarea 
            className="form-input"
            onChange={handleChange} 
            value={text}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-block"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default TextArea;