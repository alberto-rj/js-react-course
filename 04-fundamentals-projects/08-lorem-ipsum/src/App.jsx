import { useState } from 'react';
import { nanoid } from 'nanoid';
import { createParagraphs } from './random-paragraphs';

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const handleChange = (event) => {
    const { target } = event;
    setCount(Number.parseInt(target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setParagraphs(createParagraphs(count));
  };

  return (
    <section className='section-center'>
      <h4 className='title'>Random paragraphs generator</h4>
      <form
        className='lorem-form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='count'>Paragraphs:</label>
        <input
          type='number'
          name='count'
          id='count'
          min='0'
          max='8'
          step='1'
          value={count}
          onChange={handleChange}
        />
        <button
          className='btn'
          type='submit'
        >
          Generate
        </button>
      </form>

      <article className='lorem-text'>
        {paragraphs.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
