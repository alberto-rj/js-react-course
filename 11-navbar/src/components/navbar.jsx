import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../logo.svg';

function Navbar() {
  const [canShowLinks, setCanShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const { height } = linksRef.current.getBoundingClientRect();
    linksContainerRef.current.style.height = canShowLinks ? `${height}px` : '0';
  }, [canShowLinks]);

  const toggleCanShowLinks = () => {
    setCanShowLinks(!canShowLinks);
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src={logo}
            className='logo'
            alt='logo'
          />
          <button
            className='nav-toggle'
            onClick={toggleCanShowLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className='links-container'
          ref={linksContainerRef}
        >
          <ul
            className='links'
            ref={linksRef}
          >
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-links'>
          {social.map(({ id, url, text, icon }) => {
            return (
              <li key={id}>
                <a
                  aria-label={text}
                  href={url}
                >
                  <span aria-hidden='true'>{icon}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
