import { useReducer } from 'react';
import { ACTION_CLEAR, ACTION_REMOVE, ACTION_RESET } from './list-actions';
import reducer from './list-reducer';
import { data } from '../../../data';

const initialState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    dispatch({ type: ACTION_REMOVE, payload: { id } });
  };

  const resetList = () => {
    dispatch({ type: ACTION_RESET });
  };

  const clearList = () => {
    dispatch({ type: ACTION_CLEAR });
  };

  return (
    <div className='container'>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className='item'
            style={{ marginBottom: '2rem' }}
          >
            <h4>{name}</h4>
            <button
              className='btn'
              onClick={() => removeItem(id)}
            >
              remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          type='button'
          className='btn btn-block'
          style={{ marginTop: '1rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          type='button'
          className='btn btn-block'
          style={{ marginTop: '1rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
