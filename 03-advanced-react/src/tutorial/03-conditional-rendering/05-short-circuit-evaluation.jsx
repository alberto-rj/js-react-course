import { useState } from "react";

const ShortCircuitEvaluation = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div>
      <h2>{text || 'default'}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* more info below */}
      {!text && (
        <div>
          <h2>whatever return</h2>
          {name}
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0'}}>Ternary Operator</h2>
      <button className="btn">{isEditing ? 'edit' : 'add'}</button>
      {
        user ? (
          <div>
            <h4>hello there user {user.name}</h4>
          </div>
        ) : (
          <div>
            <h2>please login</h2>
          </div>
        )
      }
    </div>
  )
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>hello there, {name}</h4>
      <button className="btn">logout</button>
    </div>
  );
};

export default ShortCircuitEvaluation;