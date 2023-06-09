import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { About } from './About/About';
import { Login } from './authentication/Login/Login';
import { Registration } from './authentication/Registration/Registration';
import { AuthAdmin } from './authAdmin/AuthAdmin';

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
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/userSettings',
    element: <AuthAdmin />,
  },
]);
