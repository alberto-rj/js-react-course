import { useState } from 'react';
import { useDeleteTask, useUpdateTask } from './hooks/task-hooks';

const SingleItem = ({ id, title, isDone }) => {
  const [isCompleted, setIsCompleted] = useState(isDone);

  const { isPending: editTaskIsPending, mutate: editTask } = useUpdateTask();

  const { isPending: deleteTaskIsPending, mutate: deleteTask } =
    useDeleteTask();

  const handleIsDoneChange = (event) => {
    const newTask = { id: event.target.dataset.taskId, isDone: !isDone };
    editTask(newTask, {
      onError: () => {
        setIsCompleted((prevState) => prevState);
      },
      onSuccess: () => {
        setIsCompleted((prevState) => !prevState);
      },
    });
  };

  const handleDeleteClick = (event) => {
    deleteTask(event.target.dataset.taskId);
  };

  const completedId = `completed-${id}`;

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        id={completedId}
        checked={isCompleted}
        onChange={handleIsDoneChange}
        data-task-id={id}
        disabled={editTaskIsPending}
      />
      <label
        htmlFor={completedId}
        style={{
          textTransform: 'capitalize',
          textDecoration: isCompleted && 'line-through',
        }}
      >
        {title}
      </label>
      <button
        type='button'
        className='btn remove-btn'
        onClick={handleDeleteClick}
        data-task-id={id}
        disabled={deleteTaskIsPending}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
