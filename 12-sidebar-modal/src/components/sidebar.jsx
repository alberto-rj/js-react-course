import { FaTimes } from 'react-icons/fa';
import { links, socialLinks } from '../data';
import logo from '../logo.svg';
import { useAppContext } from '../context';

const Sidebar = () => {
  const {
    sidebar: { isOpen, close },
  } = useAppContext();

  const classToOpen = isOpen ? ' show-sidebar' : '';

  return (
    <aside className={`sidebar${classToOpen}`}>
      <div className='sidebar-header'>
        <img
          className='logo'
          src={logo}
          alt='Logo'
        />
        <button
          type='button'
          className='close-btn'
          onClick={close}
          aria-label='Close sidebar'
        >
          <FaTimes aria-hidden='true' />
        </button>
      </div>

      <ul className='links'>
        {links.map(({ id, text, icon, url }) => {
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='social-links'>
        {socialLinks.map(({ id, text, icon, url }) => {
          return (
            <li key={id}>
              <a
                aria-label={text}
                href={url}
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
