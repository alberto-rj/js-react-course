import { useState } from 'react';
import data from './data';
import { List } from './components';

function App() {
  const [people, setPeople] = useState(data);
  const [isClean, setIsClean] = useState(false);

  const handleClear = () => {
    setPeople([]);
    setIsClean(true);
  };

  return (
    <div className='wrapper'>
      {isClean ? (
        <div className='card'>
          <h1 
            className='card-title'
          >
            No Birthdays Today
          </h1>
          <button
            className='card-btn'
            onClick={handleClear}
            disabled
          >
            all clean
          </button>
        </div>
      ) : (
        <div className='card'>
          <h1 
            className='card-title'
          >
            {people.length} Birthdays Today
          </h1>
          <List people={people} />
          <button
            className='card-btn'
            onClick={handleClear}
          >
            clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
