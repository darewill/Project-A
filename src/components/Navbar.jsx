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
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <NavigationMenu className="item-container">
        <NavigationMenuList>
            <Link to='/'>
              <img src={Logo} className='h-[80px]'/>
            </Link>
          <div className="flex justify-center">
          <NavigationMenuItem className='navbar-menu-item p-[10px]'>
            <Link to='/products'>
              <NavigationMenuLink>Products</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='navbar-menu-item p-[10px]'>
            <Link to='/posts'>
              <NavigationMenuLink>Posts</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
