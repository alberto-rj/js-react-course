import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const THEME_DARK = 'dim';
const THEME_LIGHT = 'fantasy';
const THEME_KEY = 'comfy-store-theme';

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  const hasStoredTheme = typeof storedTheme === 'string';

  if (hasStoredTheme) {
    return storedTheme;
  }

  const hasPreferredDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  if (hasPreferredDarkTheme) {
    return THEME_DARK;
  }

  return THEME_LIGHT;
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
};

const isDarkTheme = getInitialTheme() ? THEME_DARK : THEME_LIGHT;

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(isDarkTheme);

  useEffect(() => {
    const pickedTheme = isDarkMode ? THEME_DARK : THEME_LIGHT;
    setTheme(pickedTheme);
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label
      htmlFor='dark-mode'
      className='swap swap-rotate'
    >
      {/* this hidden checkbox controls the state */}
      <span className='sr-only'>Dark mode</span>

      <input
        id='dark-mode'
        role='switch'
        type='checkbox'
        onChange={handleThemeChange}
      />

      {/* sun icon */}
      <BsSunFill
        className='swap-on'
        aria-hidden='true'
        focusable='false'
      />

      {/* moon icon */}
      <BsMoonFill
        className='swap-off'
        aria-hidden='true'
        focusable='false'
      />
    </label>
  );
};

export default ThemeSwitcher;
