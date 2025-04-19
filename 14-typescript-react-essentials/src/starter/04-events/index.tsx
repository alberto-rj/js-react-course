import { useState } from 'react';

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Submit the form:', event.timeStamp);
  };

  return (
    <section>
      <h2>events example</h2>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <input
          className='form-input mb-1'
          type='text'
          name='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type='email'
          className='form-input mb-1'
          value={email}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='btn btn-block'
        >
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
