// src/routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './assets/App';
import Register from './assets/register';
import Login from './assets/login';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
