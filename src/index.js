import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Commands from './pages/Commands'
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Tutorial from './pages/Tutorial';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  },
  {
    path: "commands",
    element: <Commands/>
  },
  {
    path: "privacy",
    element: <Privacy/>
  },
  {
    path: "terms",
    element: <Terms/>
  },
  {
    path: "tutorial",
    element: <Tutorial/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);