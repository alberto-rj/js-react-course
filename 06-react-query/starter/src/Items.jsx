import SingleItem from './SingleItem';
import DisplayLoader from './DisplayLoader';
import { useListTask } from './hooks/task-hooks';

const Items = () => {
  const { isPending, isError, error, data } = useListTask();

  return (
    <DisplayLoader
      isPending={isPending}
      pending={<p style={{ marginTop: '2rem' }}>Loading..</p>}
      isError={isError}
      error={<p style={{ marginTop: '2rem' }}>{error?.message}</p>}
    >
      <div className='items'>
        {data?.taskList?.map((item) => (
          <SingleItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </DisplayLoader>
  );
};

export default Items;
