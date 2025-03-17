import { useState, createContext, useContext } from 'react';
import NavLinks from './nav-links';

const NavbarContext = createContext();

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

const Navbar = () => {
  const [user, setUser] = useState({
    name: 'John',
  });

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: 'John' });
  };

  return (
    <NavbarContext.Provider value={{ user, login, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
