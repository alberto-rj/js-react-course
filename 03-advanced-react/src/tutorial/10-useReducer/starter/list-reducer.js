import { data } from '../../../data';
import { ACTION_CLEAR, ACTION_RESET, ACTION_REMOVE } from './list-actions';

const reducer = (currentState, { type, payload }) => {
  const actions = {
    [ACTION_CLEAR]: () => ({ ...currentState, people: [] }),
    [ACTION_RESET]: () => ({ ...currentState, people: data }),
    [ACTION_REMOVE]: () => ({
      ...currentState,
      people: currentState.people.filter((person) => person.id !== payload.id),
    }),
  };

  if (!actions.hasOwnProperty(type)) {
    throw new Error(`'${type}' is an unexpected action type`);
  }

  return actions[type]();
};

export default reducer;
