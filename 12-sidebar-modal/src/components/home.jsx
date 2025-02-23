import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useAppContext } from '../context';

const Home = () => {
  const { sidebar, modal } = useAppContext();
  const { open: openSidebar } = sidebar;
  const { open: openModal } = modal;

  return (
    <>
      <main>
        <button
          className='sidebar-toggle'
          onClick={openSidebar}
          aria-label='Open sidebar'
        >
          <FaBars aria-hidden='true' />
        </button>
        <button
          className='btn'
          onClick={openModal}
        >
          Open modal
        </button>
      </main>
    </>
  );
};

export default Home;
