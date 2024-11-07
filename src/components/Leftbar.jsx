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
      <div className="menu-item mb-[5px] text-l h-[35px] hover:bg-[#ff5b1f] hover:text-white flex mx-[30px] p-[5px] rounded items-center">
        <span>
          {item.icon}
        </span>
      </div>
    </Link>
  ));
  
  return (
    <div>
      <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#818080]">Dashboards</p>
        {menuComponents}
        <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#818080]">Charts</p>
        {menuComponents}
        <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#818080]">Charts</p>
        {menuComponents}
    </div>
  )
}
