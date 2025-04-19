import { useDispatch } from 'react-redux';
import { close } from '../features/modal/modalSlice';
import { clear } from '../features/cart/cartSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleConfirmClick = () => {
    dispatch(clear());
    dispatch(close());
  };

  const handleCancelClick = () => {
    dispatch(close());
  };

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={handleConfirmClick}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={handleCancelClick}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
