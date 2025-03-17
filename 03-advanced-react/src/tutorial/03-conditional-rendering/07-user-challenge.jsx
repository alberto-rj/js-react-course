import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Alberto' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button 
            onClick={logout} 
            className="btn">
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button 
            onClick={login} 
            className="btn">
            login
          </button>
        </div>
      )
      }
    </div>
  );
};

export default UserChallenge;