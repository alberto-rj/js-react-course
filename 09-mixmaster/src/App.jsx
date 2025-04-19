import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomeLayout } from './layouts';
import {
  About,
  Cocktail,
  singleCocktailLoader,
  Error,
  Landing,
  landingLoader,
  Newsletter,
  newsletterAction,
} from './pages';
import { SinglePageError } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'cocktail/:id',
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
        element: <Cocktail />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: 'newsletter',
        action: newsletterAction,
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
