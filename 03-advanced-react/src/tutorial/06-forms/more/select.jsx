import { useState } from "react";

const Select = () => {
  const [car, setCar] = useState('Volvo');

  const handleChange = (event) => {
    setCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`submitting '${car}' to the server`);
  };

  return (
    <form className="form">
      <label
        className="form-label"
        htmlFor="select-car"
      >
        Select your car
      </label>
      <select
        id="select-car"
        className="form-input"
        value={car}
        onChange={handleChange}
      >
        <option value="1">Ford</option>
        <option value="2">Fiat</option>
        <option value="3">Volvo</option>
      </select>
      <button
        type="submit"
        className="btn btn-block"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Select;