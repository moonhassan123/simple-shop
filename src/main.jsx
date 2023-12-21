import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Homes from './component/home/homes.jsx';
import Buttom from './component/Navbar/Buttom.jsx';
import Login from './component/home/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,

    children:[
      {
        path: "/Home",
        element: <Homes></Homes>,
      },
      {
        path: "/Shop",
        element:<App></App>,
      },
      {
        path: "/services",
        element: <h1>services </h1>,
      },
      {
        path: "/Contact",
        element: <h1>contact</h1>,
      },
      {
        path: "/Login",
        element:<Login></Login>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
