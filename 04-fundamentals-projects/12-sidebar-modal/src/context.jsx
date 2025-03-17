import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useAppContext = () => {
  return useContext(GlobalContext);
};

const useInteractiveComponent = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return { isOpen, close, open };
};

const AppContext = ({ children }) => {
  const modal = useInteractiveComponent(false);
  const sidebar = useInteractiveComponent(false);
  const value = { modal, sidebar };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
