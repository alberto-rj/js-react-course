import { useState } from "react";

const MyForm = () => {

  const [user, setUser] = useState(
    { name: '', age: 0 }
  );

  const handleChange = (event) => {
    const { target: { name, value }} = event;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, age } = user;
    alert(`New user submit (Name: ${name}, Age:${age})`);
  };

  const { name, age } = user;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input-name">
        Enter your name:
        <input
          type="text"
          name="name"
          id="input-name" 
          onChange={handleChange} 
          value={name}
        />
      </label><br />
      <label htmlFor="input-age">
        Enter your age:
        <input 
          type="number" 
          name="age" 
          id="input-age" 
          onChange={handleChange} 
          value={age}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default MyForm;