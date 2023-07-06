import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { RouterProvider } from 'react-router-dom';
import { Router } from './components/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);
