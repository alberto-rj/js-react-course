import { FaCartPlus } from 'react-icons/fa';
import { useAppProvider } from './AppProvider';

const Navbar = () => {
  const { state } = useAppProvider();
  const totalAmount = state.cart.items.size;

  return (
    <nav>
      <div className='nav-center'>
        <h4>useReducer</h4>
        <div className='nav-container'>
          <FaCartPlus className='cart-icon' />
          {totalAmount > 0 && (
            <div className='amount-container'>
              <p className='total-amount'> {totalAmount}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
