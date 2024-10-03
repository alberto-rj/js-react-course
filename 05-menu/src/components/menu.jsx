import { useContext } from "react";
import { MenuItem } from "./";
import { MenuContext } from "../App";

const Menu = () => {
  const { menuItems } = useContext(MenuContext);
  return (
    <ul className="menu">
      {menuItems.map((menuItem) => {
        return (
          <MenuItem 
            key={menuItem.id} 
            {...menuItem}
          />
        );
      })}
    </ul>
  );
};

export default Menu;