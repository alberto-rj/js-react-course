import { useAppProvider } from './AppProvider';
import { ACTION_CLEAR, ACTION_TOTAL } from './cart-actions';
import CartItem from './CartItem';

const CartContainer = () => {
  const { state, dispatch } = useAppProvider();

  const cartArray = [...state.cart.items.values()];

  const handleClear = () => {
    dispatch({
      type: ACTION_CLEAR,
    });
    dispatch({
      type: ACTION_TOTAL,
    });
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

  if (cartArray.length === 0) {
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
        {cartArray.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              {...cartItem}
            />
          );
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${state.cart.total}</span>
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
