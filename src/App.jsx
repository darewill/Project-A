import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Invoice } from "./components/Invoice";
import Login from "./components/Login";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Signup from "./components/Signup";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Leftbar from "./components/Leftbar";

function App() {
  const Homepage = () => {
    return (
      <div className="main-wrapper">
        <div className="main-header ">
          <Navbar />
        </div>
        <div className="main-center flex justify-center mt-[40px] mr-[10px] ml-[10px]">
        <div className="left-bar home-tabs bg-white m-[15px] h-[100%] w-[15%] rounded-md">
          <Leftbar />
        </div>
        <div className="main-content home- bg-white m-[15px] w-[85%] h-[730px] rounded-md">
          <Outlet />
        </div>
        </div>
        
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
        {
          path: "/invoice",
          element: <Invoice />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
