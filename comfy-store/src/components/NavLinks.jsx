import { NavLink } from 'react-router-dom';

const navLinks = [
  { id: 1, url: '/', text: 'Home' },
  { id: 2, url: '/about', text: 'About' },
  { id: 3, url: '/products', text: 'Products' },
  { id: 4, url: '/cart', text: 'Cart' },
  { id: 5, url: '/checkout', text: 'Checkout' },
  { id: 6, url: '/orders', text: 'Orders' },
];

const NavLinks = () => {
  return (
    <ul>
      {navLinks.map(({ id, url, text }) => (
        <li key={id}>
          <NavLink to={url}>{text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
