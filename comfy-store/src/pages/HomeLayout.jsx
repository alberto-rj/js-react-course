import { Outlet } from 'react-router-dom';

import { Header, Navbar } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className='page-wrapper py-20'>
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
