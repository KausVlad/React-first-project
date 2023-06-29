import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { About } from './About/About';
import { Login } from './authentication/Login/Login';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
