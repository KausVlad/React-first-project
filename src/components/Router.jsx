import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { About } from './About/About';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
