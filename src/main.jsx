import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Products } from './pages/Products'
import { Tasks } from './pages/Tasks'
import { Error } from './pages/Error'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// exemplo 1
/*
const router = createBrowserRouter([
  { path: "/",        element: <App /> },
  { path: "products", element: <Products /> },
  { path: "tasks", element: <Tasks /> },
  // { errorElement: <Error /> },
]);
*/

/* exemplo 2  */
const router = createBrowserRouter([
     { 
       path: "/", 
       element: <App />,
       errorElement: <Error />,
       children: [
         { path: "products", element: <Products /> },
         { path: "tasks",    element: <Tasks /> }
       ]
     },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
