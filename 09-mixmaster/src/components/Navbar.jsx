import { NavLink } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Navbar';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/newsletter', label: 'Newsletter' },
];

const Navbar = () => {
  return (
    <Wrapper>
      <div className='nav-center'>
        <NavLink
          aria-label='MixMaster - home'
          to='/'
        >
          <span
            aria-hidden='true'
            className='logo'
          >
            MixMaster
          </span>
        </NavLink>
        <ul className='nav-links'>
          {navLinks.map(({ path, label }) => (
            <li key={label}>
              <NavLink
                to={path}
                className='nav-link'
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;
