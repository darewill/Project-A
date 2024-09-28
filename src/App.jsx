import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts";
import Products from "./components/Products";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const Homepage = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;