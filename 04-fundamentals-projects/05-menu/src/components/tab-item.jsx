import { useContext, useState } from "react";
import { MenuContext } from "../App";

const TabItem = ({ category }) => {
  const { currentCategory, filterCategory } = useContext(MenuContext);

  const getClassName = () => {
    const className = 'tab__item';
    if (category === currentCategory) {
      return `${className} ${className}--active`;
    }
    return className;
  };

  const handleClick = () => {
    filterCategory(category);
  }

  return (
    <button 
      className={getClassName()} 
      onClick={handleClick}
    >
      {category}
    </button>
  );
};

export default TabItem;