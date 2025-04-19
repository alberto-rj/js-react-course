import { useState } from 'react';
import { Task } from './types';

type FormProps = {
  addTask(task: Task): void;
} & React.PropsWithChildren;

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.text as HTMLInputElement;

    const taskDescription = text.trim();

    if (taskDescription === '') {
      alert('please enter a task');
      input.focus();
      return;
    }

    addTask({
      id: Date.now().toString(),
      description: taskDescription,
      isCompleted: false,
    });

    setText('');
  };

  return (
    <form
      className='form task-form'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='form-input'
        value={text}
        name='text'
        onChange={handleChange}
      />
      <button
        type='submit'
        className='btn'
      >
        add task
      </button>
    </form>
  );
};

export default Form;
