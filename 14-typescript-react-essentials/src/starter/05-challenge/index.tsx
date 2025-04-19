type BasicProfileCard = {
  type: 'basic';
  name: string;
};

type AdvancedProfileCard = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCard | AdvancedProfileCard;

function Component(props: ProfileCardProps) {
  if (props.type === 'basic') {
    return (
      <article className='alert alert-success'>
        <h2>user : {props.name}</h2>
      </article>
    );
  }

  return (
    <article className='alert alert-danger'>
      <h2>user : {props.name}</h2>
      <h2>email : {props.email}</h2>
    </article>
  );
}
export default Component;
