import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
} & React.PropsWithChildren;

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <ul className='list'>
      {tasks.map(({ id, description, isCompleted }) => (
        <li key={id}>
          <p className='task-text'>{description}</p>
          <input
            type='checkbox'
            checked={isCompleted}
            onChange={() => {
              toggleTask({ id });
            }}
          />
        </li>
      ))}
    </ul>
  );
};
export default List;
