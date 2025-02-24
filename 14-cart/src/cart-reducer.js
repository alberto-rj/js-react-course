import {
  ACTION_ADD,
  ACTION_INCREASE,
  ACTION_DECREASE,
  ACTION_TOTAL,
  ACTION_REMOVE,
  ACTION_CLEAR,
  ACTION_FETCH,
} from './cart-actions';
import { createCart, getCartTotal } from './util';

const actions = new Map();

actions.set(ACTION_ADD, (state, payload) => {
  const { id } = payload;
  const newState = { ...state };
  const cart = newState.cart;

  cart.items.set(id, { ...payload });

  return newState;
});

actions.set(ACTION_INCREASE, (state, payload) => {
  const { id } = payload;
  const newState = { ...state };

  const cart = newState.cart;
  cart.items.get(id).amount += 1;

  return newState;
});

actions.set(ACTION_DECREASE, (state, payload) => {
  const { id } = payload;

  const newState = { ...state };

  const cart = newState.cart;

  const cartItem = cart.items.get(id);
  cartItem.amount -= 1;

  if (cartItem.amount === 0) {
    cart.items.delete(id);
  }

  return newState;
});

actions.set(ACTION_TOTAL, (state) => {
  const newState = { ...state };
  const cart = newState.cart;

  cart.total = getCartTotal(cart.items);

  return newState;
});

actions.set(ACTION_REMOVE, (state, payload) => {
  const { id } = payload;
  const newState = { ...state };

  newState.cart.items.delete(id);

  return newState;
});

actions.set(ACTION_CLEAR, (state) => {
  const newState = { ...state };

  newState.cart.items.clear();

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
