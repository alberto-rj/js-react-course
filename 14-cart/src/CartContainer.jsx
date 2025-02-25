import { useAppProvider } from './AppProvider';
import { ACTION_CLEAR } from './cart-actions';
import CartItem from './CartItem';

const CartContainer = () => {
  const { state, dispatch } = useAppProvider();

  const cartItems = state.cart.getItems();
  const cartTotal = state.cart.getTotal();

  const handleClear = () => {
    dispatch({ type: ACTION_CLEAR });
  };

  if (state.isLoading) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently loading...</h4>
        </header>
      </section>
    );
  }

  if (state.hasError) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>Sorry, there was an error!</h4>
        </header>
      </section>
    );
  }

  if (cartItems.length === 0) {
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
        {cartItems.map((item) => {
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
        <div>
          <h5 className='cart-total'>
            total <span>${cartTotal}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={handleClear}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
