import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';

import store from './redux/store';

import RootComponent from './root/RootComponent';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import AdventureShow from './Components/AdventureShow';
import CreateAdventuresForm from './Components/CreateAdventuresForm';
import ReservationList from './Components/ReservationList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      { path: '/adventures/:id', element: <AdventureShow /> },
      { path: 'signup', element: <RegisterForm /> },
      { path: 'login', element: <LoginForm /> },
      { path: 'addAdventure', element: <CreateAdventuresForm /> },
      { path: 'reservations', element: <ReservationList /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
);
