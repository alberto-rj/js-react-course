import { createContext, useEffect, useState } from 'react';
import data from './data';
import { Loading, Menu, Tab, Title } from './components';

export const MenuContext = createContext();

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const getCategories = () => {
    const categories = new Set();
    categories.add('all');

    data.forEach((menuItem) => {
      categories.add(menuItem.category);
    });

    return Array.from(categories);
  };

  const filterCategory = (name) => {
    const items = name === 'all' ? data : data.filter((item) => item.category === name);

    setMenuItems(items);
    setCurrentCategory(name);
  };

  useEffect(() => {
    const eventType = 'load';
    const handleLoading = () => {
      setLoading(false);
    };
    window.addEventListener(eventType, handleLoading);
    return () => document.removeEventListener(eventType, handleLoading);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        getCategories,
        filterCategory,
        currentCategory,
        menuItems
      }}
    >
      <main className="page">
        <div className="page__content">
          {loading ? (
            <Loading />
          ) : (
            <>
              <Title
                text={'our menu'}
              />
              <Tab />
              <Menu />
            </>
          )}
        </div>
      </main>
    </MenuContext.Provider>
  );
};

export default App;
