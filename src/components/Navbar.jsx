import '../style/Navbar.css';
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

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <NavigationMenu className="flex justify-center">
        <NavigationMenuList>
          <NavigationMenuItem className='navbar-menu-item'>
            <NavigationMenuLink>Products</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className='navbar-menu-item'>
            <NavigationMenuLink>Posts</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
