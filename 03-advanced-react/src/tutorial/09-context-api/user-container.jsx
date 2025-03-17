import { useNavbarContext } from './navbar';

const UserContainer = () => {
  const { user, login, logout } = useNavbarContext();

  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hi there, {user.name.toUpperCase()}!</p>
          <button
            type='button'
            className='btn'
            onClick={logout}
          >
            logout
          </button>
        </>
      ) : (
        <>
          <p>You did logout!</p>
          <button
            type='button'
            className='btn'
            onClick={login}
          >
            login
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
