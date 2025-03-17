import UserContainer from "./user-container";

const NavLinks = ({ user, logout }) => {
  return (
    <div 
      className="nav-container" 
    >
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <UserContainer 
        user={user} 
        logout={logout} 
      />
    </div>
  );
};

export default NavLinks;