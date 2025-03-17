import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useAppContext = () => {
  return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Albert',
    age: 23,
  });

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
