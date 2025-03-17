import { createContext, useContext, useEffect, useState } from 'react';
import {
  COLOR_MODE_DARK,
  COLOR_MODE_LIGHT,
  getInitialColorMode,
  setColorMode,
} from '../lib/util';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialColorMode = getInitialColorMode();
const initialColorModeIsDark = initialColorMode === COLOR_MODE_DARK;

const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialColorModeIsDark);
  const [search, setSearch] = useState('cat');

  useEffect(() => {
    const preferredColorMode = isDarkMode ? COLOR_MODE_DARK : COLOR_MODE_LIGHT;
    setColorMode(preferredColorMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppContext.Provider
      value={{ toggleDarkMode, isDarkMode, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
