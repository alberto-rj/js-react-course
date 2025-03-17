import avatar from '../../assets/default-avatar.svg';

const Person = (props) => {
  const { name, nickName = 'shakeAndBake', images } = props;
  const img = images?.[0]?.small?.url ?? avatar;
  const style = {
    width: '50px',
    objectFit: 'cover',
    borderRadius: '50%'
  };
  return (
    <div>
      <img 
        src={img} 
        alt={name} 
        style={style} 
      />
      <h4>{name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  )
};

export default Person;