import { SingleItem } from './';

const Items = ({ onToggle, onRemove, items }) => {
  return (
    <ul className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            onRemove={onRemove}
            onToggle={onToggle}
            {...item}
          />
        );
      })}
    </ul>
  );
};

export default Items;
