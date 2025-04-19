import { Form, Link } from 'react-router-dom';

import { FormInput, SubmitBtn } from '../components';

const Register = () => {
  return (
    <main className='c-page-content'>
      <Form
        method='post'
        className='c-form-card'
      >
        <h1 className='c-page-title'>Register</h1>
        <FormInput
          type='text'
          name='username'
          label='Username'
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
        />
        <SubmitBtn text='Register' />
        <button
          type='button'
          className='btn btn-secondary btn-block'
        >
          Guest user
        </button>
        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary'
          >
            Login
          </Link>
        </p>
      </Form>
    </main>
  );
};

export default Register;
