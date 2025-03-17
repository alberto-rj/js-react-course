import { useAppContext } from './context';

const App = () => {
  const {
    user: { name, age },
  } = useAppContext();

  return (
    <>
      <h1>User details</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </>
  );
};

export default App;
