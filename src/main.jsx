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
import FoodPage from './page/FoodPage.jsx'
import AllFoodPage from './page/AllFoodPage.jsx'
import AllFoodByArea from './page/AllFoodByArea.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: "/food/:id",
        Component: FoodPage
      },
      {
        path: "/foods/:name",
        Component: AllFoodPage
      },
      {
        path: "/area/:area",
        Component: AllFoodByArea
      },
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
