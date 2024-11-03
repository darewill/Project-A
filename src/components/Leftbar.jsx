import React from 'react';
import '../style/Leftbar.css';
import { Invoice } from './Invoice';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "Invoices",
    icon: "invoice",
    path: '/invoice'
  },
  {
    title: "test",
    icon: 'test',
    path: '/'
  }
];

export default function Leftbar() {
  const menuComponents = menuItems.map((item)=>(
    <Link to={item.path}>
      <div className="menu-item">
        <span>
          {item.icon}
        </span>
      </div>
    </Link>
  ));
  
  return (
    <div>
        {menuComponents}
    </div>
  )
}
