import "../style/Navbar.css";
import Logo from "../img/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-wrapper flex">
      <Link to="/">
        <img src={Logo} className="h-[80px] ml-[35%]" />
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
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </div>
  );
}
