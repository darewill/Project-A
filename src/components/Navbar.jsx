import "../style/Navbar.css";
import Logo from "../img/logo.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, [localStorage.getItem("isLoggedIn")]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar-wrapper flex">
      <Link to="/">
        <img src={Logo} className="h-[80px] ml-[35%]" alt="Logo" />
      </Link>
      <div className="navbar-items ml-[42.5%]">
        <NavigationMenu className="item-container">
          <NavigationMenuList>
            <NavigationMenuItem className="navbar-menu-item p-[10px]">
              <Link to="/products">
                <NavigationMenuLink>Products</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="navbar-menu-item p-[10px]">
              <Link to="/posts">
                <NavigationMenuLink>Posts</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {isLoggedIn ? (
              <NavigationMenuItem className="navbar-menu-item p-[10px]">
                <button onClick={handleLogout} className="text-red-500">
                  Logout
                </button>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className="navbar-menu-item p-[10px]">
                <Link to="/login">
                  <NavigationMenuLink>Login</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
    </div>
  );
}
