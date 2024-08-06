// src/routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './assets/App';
import Register from './assets/register';
import Login from './assets/login';
import Home from "./assets/home";
import Cart from "./assets/cart";
import Sell from "./assets/sell";

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
  {
    path:"/home",
    element: <Home/>,
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/sell",
    element:<Sell/>
  }
]);

export default routes;
