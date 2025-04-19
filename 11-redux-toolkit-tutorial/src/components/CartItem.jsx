import React from 'react';
import { useDispatch } from 'react-redux';

import { ChevronDown, ChevronUp } from '../icons';
import { remove, increase, decrease } from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(remove({ id }));
  };

  const handleIncreaseClick = () => {
    dispatch(increase({ id }));
  };

  const handleDecreaseClick = () => {
    dispatch(decrease({ id }));
  };

  return (
    <article className='cart-item'>
      <img
        src={img}
        alt={title}
      />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          type='button'
          className='remove-btn'
          onClick={handleRemoveClick}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          type='button'
          className='amount-btn'
          onClick={handleIncreaseClick}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button
          type='button'
          className='amount-btn'
          onClick={handleDecreaseClick}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
