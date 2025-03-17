import { useAppContext } from '../context';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleButton = () => {
  const { isDarkMode, toggleDarkMode } = useAppContext();

  if (isDarkMode) {
    return (
      <button
        type='button'
        aria-label='Switch from dark to light mode'
        onClick={toggleDarkMode}
        className='dark-toggle'
      >
        <FaSun
          aria-hidden='true'
          focusable='false'
          className='toggle-icon'
        />
      </button>
    );
  }

  return (
    <button
      type='button'
      aria-label='Switch from light to dark mode'
      onClick={toggleDarkMode}
      className='dark-toggle'
    >
      <FaMoon
        aria-hidden='true'
        focusable='false'
        className='toggle-icon'
      />
    </button>
  );
};

const ThemeToggle = () => {
  return (
    <div className='toggle-container'>
      <ToggleButton />
    </div>
  );
};

export default ThemeToggle;
