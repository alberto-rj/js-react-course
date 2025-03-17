import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './cart-reducer';
import { ACTION_ADD, ACTION_FETCH } from './cart-actions';
import createCart from './cart';

// const API_LOCAL_URL = '/src/data.json';
const API_REMOTE_URL =
  'https://www.course-api.com/react-useReducer-cart-project';

const API_URL = API_REMOTE_URL;

const initialState = {
  cart: createCart(),
  isLoading: true,
  hasError: false,
};

const AppContext = createContext();

export const useAppProvider = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.statusText}`);
        }
        const cartItems = await response.json();

        cartItems.forEach((item) => {
          dispatch({
            type: ACTION_ADD,
            payload: { ...item },
          });
        });

        dispatch({
          type: ACTION_FETCH,
          payload: {
            isLoading: false,
            hasError: false,
          },
        });
      } catch (error) {
        dispatch({
          type: ACTION_FETCH,
          payload: {
            isLoading: false,
            hasError: true,
          },
        });
      }
    })();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
