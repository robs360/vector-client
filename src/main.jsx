import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/home.jsx';
import Register from './Authentication/Register.jsx';
import Login from './Authentication/login.jsx';
import Authprovider from './Authprovider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/reg',
        element:<Register></Register>
      },
      {
        path:'/log',
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprovider>
      <RouterProvider router={router} />
      </Authprovider>
  </React.StrictMode>,
)
