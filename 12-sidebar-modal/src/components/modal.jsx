import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context';

const Modal = () => {
  const {
    modal: { isOpen, close },
  } = useAppContext();

  const classToOpen = isOpen ? ' show-modal' : '';

  return (
    <>
      <div className={`modal-overlay${classToOpen}`}>
        <div className='modal-container'>
          <button
            type='button'
            className='close-modal-btn'
            onClick={close}
            aria-label='Close modal'
          >
            <FaTimes aria-hidden='true' />
          </button>
          <h4>Modal content</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
