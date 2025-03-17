export const COLOR_MODE_DARK = 'dark';
export const COLOR_MODE_LIGHT = 'light';

export const setColorMode = (colorPreference) => {
  if (colorPreference === COLOR_MODE_DARK) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
  localStorage.setItem('color-mode', colorPreference);
};

export const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem('color-mode');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? COLOR_MODE_DARK : COLOR_MODE_LIGHT;
  }

  return COLOR_MODE_LIGHT;
};
