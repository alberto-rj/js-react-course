import { Form, Link } from 'react-router-dom';

import { FormInput, SubmitBtn } from '../components';

const Login = () => {
  return (
    <main className='c-page-content'>
      <Form
        method='post'
        className='c-form-card'
      >
        <h1 className='c-page-title'>Login</h1>
        <FormInput
          type='email'
          label='Email'
          name='identifier'
          defaultValue='test@test.com'
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          defaultValue='secret'
        />
        <SubmitBtn text='Login' />
        <button
          type='button'
          className='btn btn-secondary btn-block'
        >
          Guest user
        </button>
        <p className='text-center'>
          Not a member yet?
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary'
          >
            Register
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Login;
