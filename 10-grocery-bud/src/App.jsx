import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import { Form, Items } from './components';
import {
  addItem,
  removeItem,
  toggleItem,
  storeItems,
  restoreItems,
} from './items-manager';

const App = () => {
  const [items, setItems] = useState(restoreItems());

  const renderItems = (items) => {
    storeItems(items);
    setItems(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const newItemId = nanoid();
    const newItemName = formData.get('name');

    if (newItemName === '') {
      toast.error('Error, item name is required!');
      return;
    }

    renderItems(addItem(items, newItemId, newItemName));

    toast.success('Success, item added!');

    form.reset();
  };

  const handleRemove = (e) => {
    const itemId = e.target.closest('[data-item-id]').dataset.itemId;
    renderItems(removeItem(items, itemId));

    toast.success('Success, item removed!');
  };

  const handleToggle = (e) => {
    const itemId = e.target.closest('[data-item-id]').dataset.itemId;
    renderItems(toggleItem(items, itemId));
  };

  return (
    <>
      <ToastContainer position='top-right' />
      <main>
        <section className='section-center'>
          <h1 className='section-title'>Grocery Bud</h1>
          <Form onSubmit={handleSubmit} />
          <Items
            onRemove={handleRemove}
            onToggle={handleToggle}
            items={items}
          />
        </section>
      </main>
    </>
  );
};

export default App;
