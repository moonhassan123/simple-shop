import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children:[
      {
        path: "/",
        element: <App></App> ,
      },
      {
        path: "/About",
        element: <h1>About</h1>,
      },
      {
        path: "/services",
        element: <h1>services</h1>,
      },
      {
        path: "/Contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/Review",
        element: <h1>review</h1>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
