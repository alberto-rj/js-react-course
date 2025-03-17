import { useState } from 'react';
import { useCreateTask } from './hooks/task-hooks';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const { isPending: createTaskIsPending, mutate: createTask } =
    useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName('');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          type='submit'
          className='btn'
          disabled={createTaskIsPending}
        >
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
