const Person = ({ name, age, image }) => {
  return (
    <div className="person-profile">
      <img
        alt={name}
        src={image} 
        width="75"
        height="75"
        className="person-avatar"
      />
      <div className="person-details">
        <h2 className="person-name">{name}</h2>
        <p className="person-age">{age} years</p>
      </div>
    </div>
  );
}

export default Person;