import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import OurWorks from './pages/OurWorks.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ServicePage from './pages/ServicePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "ourworks",
    element: <OurWorks/>,
  },
  {
    path: "services",
    element: <ServicePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </React.StrictMode>,
)
