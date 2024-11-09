import React, {useState} from 'react';
import '../style/Leftbar.css';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: "Invoices",
    icon: "invoice",
    path: '/invoice'
  },
  {
    title: "Users",
    icon: 'users',
    path: '/users'
  }
];

export default function Leftbar() {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const menuComponents = menuItems.map((item, index)=>(
    <Link to={item.path}>
      <div className={`leftbar-item ${activeItem === index ? 'active' : ''}`} 
        onClick={() => handleItemClick(index)}>
      <div className="menu-item mb-[5px] text-l h-[100%] text-white hover:transition-colors flex mx-[30px] p-[5px] rounded items-center">
        <span>
          {item.icon}
        </span>
      </div>
      </div>
    </Link>
  ));
  
  return (
    <div>
      <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#ffffff] font-semibold">Dashboards</p>
        {menuComponents}
        <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#ffffff] font-semibold">Charts</p>
        
        <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#ffffff] font-semibold">Charts</p>
        
    </div>
  )
}
