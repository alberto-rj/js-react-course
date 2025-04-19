import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  const errorPages = {
    404: (
      <Wrapper>
        <div>
          <img
            src={img}
            alt='not found'
          />
          <h1 className='title'>Ohh!</h1>
          <p>We can't seem to find the page you're looking for.</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    ),
  };

  if (error?.status in errorPages) {
    return errorPages[error.status];
  }

  return (
    <Wrapper>
      <div>
        <h1 className='title'>Something went wrong</h1>
        <p>Please try again or later</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
