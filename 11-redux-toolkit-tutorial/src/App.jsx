import { useDispatch, useSelector } from 'react-redux';

import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useEffect } from 'react';
import { update, getItems } from './features/cart/cartSlice';

function App() {
  const { items, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  useEffect(() => {
    dispatch(update());
  }, [items]);

  if (isLoading) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <CartContainer />
      </main>
      {isOpen && <Modal />}
    </>
  );
}
export default App;
