import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './page/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        Component: Home,
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
