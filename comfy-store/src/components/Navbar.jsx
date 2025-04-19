import { BsCart3 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import { NavLinks, ThemeSwitcher } from './';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='bg-base-200'>
      <div className='c-page-wrapper navbar'>
        <div className='navbar-start'>
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center'
            aria-label='Comfy Store - home'
          >
            <span aria-hidden='true'>C</span>
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label
              tabIndex={0}
              className='btn btn-ghost lg:hidden'
            >
              <FaBars className='size-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal '>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME ICONS */}
          <ThemeSwitcher />
          {/* CART LINK*/}
          <NavLink
            to='/cart'
            className='btn btn-ghost btn-circle btn-md ml-4'
          >
            <div className='indicator'>
              <BsCart3 className='size-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
