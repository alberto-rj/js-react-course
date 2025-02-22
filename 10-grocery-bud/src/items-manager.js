const STORAGE_NAME = 'grocery-bud-items';

export const addItem = (items, id, name) => {
  const newItem = { id, name, completed: false };
  return [...items, newItem];
};

export const removeItem = (items, id) => {
  return items.filter((item) => item.id !== id);
};

export const toggleItem = (items, id) => {
  return items.map((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
    return item;
  });
};

export const storeItems = (items) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(items));
};

export const restoreItems = () => {
  const items = localStorage.getItem(STORAGE_NAME);
  if (items === null) {
    return [];
  }
  return JSON.parse(items);
};
