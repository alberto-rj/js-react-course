export const createCartItems = (cartItems) => {
  const newCartItems = cartItems.map((item) => {
    return [item.id, { ...item }];
  });
  return new Map(newCartItems);
};

export const getCartTotal = (items) => {
  let total = 0;

  for (const [, { price, amount }] of items) {
    total += price * amount;
  }

  return new Number(total.toFixed(2)).valueOf();
};

export const createCart = (cartItems = null) => {
  let items;
  let total;

  if (!cartItems) {
    items = new Map();
    total = 0;
  } else {
    items = createCartItems(cartItems);
    total = getCartTotal(items);
  }

  return { items, total };
};
