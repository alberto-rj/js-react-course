import useFetch from "./useFetch";

const Home = () => {
  const [people] = useFetch('src/people.json');

  return (
    <>
      {people &&
        people.map(({ id, name }) => {
          return <p key={id}>{name}</p>;
        })
      }
    </>
  );
};

export default Home;