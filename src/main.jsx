import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Root from './components/Root';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import WishList from './components/WishList';
import Offers from './components/Offers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: "/offers",
        element: <Offers></Offers>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <Cart></Cart>,
          },
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: () => fetch('/gadgets.json')
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
            loader: () => fetch('/gadgets.json')
          },
        ]
      },
      {
        path: "/gadgets/:productId",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadgets.json')
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
