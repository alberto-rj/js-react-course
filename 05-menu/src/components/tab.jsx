import { useContext } from 'react';
import { TabItem } from '.';
import { MenuContext } from '../App';

const Tab = () => {
  const { getCategories } = useContext(MenuContext);

  return (
    <ul className="tab">
      {getCategories().map((category) => {
        return (
          <TabItem
            key={category}
            category={category}
          />
        );
      })}
    </ul>
  );
};

export default Tab;
