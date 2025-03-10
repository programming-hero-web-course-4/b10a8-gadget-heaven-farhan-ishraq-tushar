import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import Home from "./components/home/Home.jsx";
import { RouterProvider } from "react-router/dom";
import CardDetails from "./components/home/CardDetails.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import DataContext from "./context/DataContext.jsx";
import Cart from "./components/dashboard/Cart.jsx";
// import CartItem from './components/dashboard/CartItem.jsx'

// import { WhiteListContext } from './context/WhitelistContext.jsx'
import Whitelist from "./components/dashboard/Whitelist.jsx";
import Laptops from "./components/categories/Laptops.jsx";
import AllProduct from "./components/categories/AllProduct.jsx";
import Phones from "./components/categories/Phones.jsx";
import Accessories from "./components/categories/Accessories.jsx";
import SmartWatches from "./components/categories/SmartWatches.jsx";
import NotFound from "./components/error/NotFound.jsx";
import Statistics from "./components/statistics/Statistics.jsx";
import FAQ from "./components/faq/FAQ.jsx";
import NoData from "./components/home/NoData.jsx";

const router = createBrowserRouter([
  // Path of default page
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("/gadgets.json"),
    children: [
      {
        path: "/",
        element: <AllProduct></AllProduct>,
        loader: () => fetch("/gadgets.json"),
      },

      {
        path: "/laptops",
        element: <Laptops></Laptops>,
        loader: () => fetch("/gadgets.json"),
      },

      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch("/gadgets.json"),
      },

      {
        path: "/accessories",
        element: <Accessories></Accessories>,
        loader: () => fetch("/gadgets.json"),
      },

      {
        path: "/smart-watches",
        element: <SmartWatches></SmartWatches>,
        loader: () => fetch("/gadgets.json"),
      },

      {
        path: "/iPhone",
        element: <NoData></NoData>,
      },

    ],
  },

  // gadget details page
  {
    // path: "/:id",
    path: `/gadget/:id`,
    // path: `${category}/${product_id}`,
    element: <CardDetails></CardDetails>,
    loader: () => fetch("/gadgets.json"),
  },


  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Whitelist></Whitelist>,
      },
    ],
    // loader: ()=> fetch("/public/gadgets.json")
  },

  {
    path: "/statistics",
    element: <Statistics></Statistics>,
  },

  {
    path: "/faq",
    element: <FAQ></FAQ>,
  },

  {
    path: "/*",
    element: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </DataContext>
  </StrictMode>
);
