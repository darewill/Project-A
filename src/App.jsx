import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Invoice } from "./components/Invoice";
import Login from "./components/Login";
import Navbar from "./components/Navbar.jsx";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Visitors from "./components/Visitors";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Leftbar from "./components/Leftbar";
import Users from "./components/Users";
import Calendar from "./components/Calendar";
import AuthGuard from "./components/AuthGuard";

function App() {
  const Homepage = () => {
    return (
      <div className="main-wrapper">
        <div className="main-header">
          <Navbar />
        </div>
        <div className="main-center flex justify-center mt-[40px] mr-[10px] ml-[10px]">
        <div className="left-bar sticky top-20 home-tabs bg-gradient-to-b from-[#22ba5c] to-[#55bb21] m-[15px] h-[750px] w-[15%] rounded-md p-[5px]">
          <Leftbar />
        </div>
        <div className="main-content home- bg-white m-[15px] w-[100%] h-[100%] rounded-md flex justify-center p-[50px]">
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
          element: (
            <AuthGuard>
              <Home />,
            </AuthGuard>
          ),
        },
        {
          path: "/products",
          element: (
            <AuthGuard>
              <Products />,
            </AuthGuard>
          ),
        },
        {
          path: "/posts",
          element: (
            <AuthGuard>
              <Posts />,
            </AuthGuard>
          ),
        },
        {
          path: "/invoice",
          element: (
            <AuthGuard>
              <Invoice />,
            </AuthGuard>
          ),
        },
        {
          path: "/users",
          element: (
            <AuthGuard>
              <Users />,
            </AuthGuard>
          ),
        },
        {
          path: "/visitors",
          element: (
            <AuthGuard>
              <Visitors />,
            </AuthGuard>
          ),
        },
        {
          path: "/calendar",
          element: (
            <AuthGuard>
              <Calendar />,
            </AuthGuard>
          ),
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
