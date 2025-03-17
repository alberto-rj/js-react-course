import { useState } from 'react';

const SingleItem = ({ id, name, completed, onToggle, onRemove }) => {
  return (
    <li
      className='single-item'
      data-completed={completed}
      data-item-id={id}
    >
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={onToggle}
        />
        {name}
      </label>
      <button
        type='button'
        className='remove-btn'
        onClick={onRemove}
      >
        Delete
      </button>
    </li>
  );
};

export default SingleItem;
