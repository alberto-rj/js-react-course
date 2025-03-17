import createCart from './cart';
import {
  ACTION_ADD,
  ACTION_INCREASE,
  ACTION_DECREASE,
  ACTION_REMOVE,
  ACTION_CLEAR,
  ACTION_FETCH,
} from './cart-actions';

const actions = new Map();

actions.set(ACTION_ADD, (state, payload) => {
  const newState = { ...state, cart: createCart(state.cart.getItems()) };
  newState.cart.add(payload);

  return newState;
});

actions.set(ACTION_INCREASE, (state, payload) => {
  const newState = { ...state, cart: createCart(state.cart.getItems()) };
  newState.cart.increase(payload.id);

  return newState;
});

actions.set(ACTION_DECREASE, (state, payload) => {
  const newState = { ...state, cart: createCart(state.cart.getItems()) };
  newState.cart.decrease(payload.id);

  return newState;
});

actions.set(ACTION_REMOVE, (state, payload) => {
  const newState = { ...state, cart: createCart(state.cart.getItems()) };
  newState.cart.remove(payload.id);

  return newState;
});

actions.set(ACTION_CLEAR, (state) => {
  const newState = { ...state, cart: createCart(state.cart.getItems()) };
  newState.cart.clear();

  return newState;
});

actions.set(ACTION_FETCH, (state, payload) => {
  return { ...state, ...payload };
});

const reducer = (state, { type, payload }) => {
  if (!actions.has(type)) {
    throw new Error(`"${type}" is an unexpected action type`);
  }
  return actions.get(type)(state, payload);
};

export default reducer;
