import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-2 bg-neutral text-neutral-content'>
      <div className='c-page-wrapper flex justify-center sm:justify-end'>
        <div className='flex gap-x-6 justify-center items-center'>
          <Link
            to='/login'
            className='c-nav-link'
          >
            Sign in / Guest
          </Link>
          <Link
            to='/register'
            className='c-nav-link'
          >
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
