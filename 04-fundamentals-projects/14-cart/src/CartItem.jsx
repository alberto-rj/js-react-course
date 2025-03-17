import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useAppProvider } from './AppProvider';
import {
  ACTION_DECREASE,
  ACTION_INCREASE,
  ACTION_REMOVE,
} from './cart-actions';

const CartItem = ({ id, img, title, price, amount }) => {
  const { dispatch } = useAppProvider();

  const handleRemove = () => {
    dispatch({
      type: ACTION_REMOVE,
      payload: { id },
    });
  };

  const handleIncrease = () => {
    dispatch({
      type: ACTION_INCREASE,
      payload: { id },
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: ACTION_DECREASE,
      payload: { id },
    });
  };

  return (
    <article className='cart-item'>
      <img
        src={img}
        alt={title}
      />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>
          {amount > 1 ? (
            <>
              <i>{amount} &times;</i> ${price} = ${(amount * price).toFixed(2)}
            </>
          ) : (
            <>${price}</>
          )}
        </span>
        {/* remove button */}
        <button
          type='button'
          className='remove-btn'
          onClick={handleRemove}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          type='button'
          className='amount-btn'
          onClick={handleIncrease}
        >
          <FaChevronUp className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* decrease amount */}
        <button
          type='button'
          className='amount-btn'
          onClick={handleDecrease}
        >
          <FaChevronDown className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
