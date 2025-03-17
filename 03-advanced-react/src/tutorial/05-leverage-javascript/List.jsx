import { people } from "../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h2>People</h2>
      {people.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
          />
        );
      })}
    </div>
  )
};

export default List;