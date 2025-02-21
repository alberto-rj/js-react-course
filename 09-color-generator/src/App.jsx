import Values from 'values.js';
import ColorForm from './components/color-form';
import ColorList from './components/color-list';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const initialColor = '#f15025';

const generateColors = (color) => {
  return [...new Values(color).all(10)];
};

const App = () => {
  const [color, setColor] = useState(initialColor);
  const [colors, setColors] = useState(generateColors(initialColor));

  const isValidColor = (color) => {
    const regex = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
    return regex.test(color);
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setColor(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidColor(color)) {
      toast.error(`Can't generate colors!`);
      return;
    }

    try {
      const newColors = generateColors(color);
      setColors(newColors);
      toast.success(`Colors successfully generated!`);
    } catch (error) {
      toast.error(`Failed to generate colors!`);
    }
  };

  return (
    <main>
      <ToastContainer position='top-center' />
      <section className='container'>
        <h4>Color Generator </h4>
        <ColorForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          color={color}
        />
      </section>
      <ColorList colors={colors} />
    </main>
  );
};

export default App;
