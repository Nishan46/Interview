import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './Pages/Main';
import PandV from './Pages/PandV';
import Technical from './Pages/Technical';
import AandR from './Pages/AandR';


const router = createBrowserRouter([
  {
      path: "/",
      element: (
        <App/>
      ),
    },
    {
      path: "main",
      element: <Main/>,
    },
    {
      path: "photography&videography",
      element: <PandV/>,
    },
    {
      path: "technical",
      element: <Technical/>,
    },
    {
      path: "announcing&reporting",
      element: <AandR/>,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
