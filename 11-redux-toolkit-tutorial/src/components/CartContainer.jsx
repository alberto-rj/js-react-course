import React from 'react';

import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { items, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleClearCartClick = () => {
    dispatch(open());
  };

  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {items.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
            />
          );
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          type='button'
          onClick={handleClearCartClick}
          className='btn clear-btn'
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
