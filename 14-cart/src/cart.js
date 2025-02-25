const createCart = (cartItems) => {
  const items = cartItems
    ? new Map(cartItems.map((item) => [item.id, { ...item }]))
    : new Map();

  const add = (item) => {
    items.set(item.id, { ...item });
  };

  const remove = (id) => {
    items.delete(id);
  };

  const increase = (id) => {
    const item = items.get(id);
    item.amount += 1;
  };

  const decrease = (id) => {
    const item = items.get(id);
    item.amount -= 1;

    if (item.amount === 0) {
      items.delete(id);
    }
  };

  const clear = () => {
    items.clear();
  };

  const getSize = () => {
    return items.size;
  };

  const getTotal = () => {
    let total = 0;

    for (const [, { price, amount }] of items) {
      total += price * amount;
    }

    return new Number(total.toFixed(2)).valueOf();
  };

  const getItems = () => {
    return [...items.values()];
  };

  return {
    add,
    increase,
    decrease,
    remove,
    clear,
    getItems,
    getTotal,
    getSize,
  };
};

export default createCart;
