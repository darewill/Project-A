import React, {useState} from 'react';
import '../style/Leftbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faRocket } from '@fortawesome/free-solid-svg-icons';

const menuItems = [
  {
    title: "Invoices",
    icon: "Invoices",
    path: '/invoice'
  },
  {
    title: "Users",
    icon: 'Users',
    path: '/users'
  },
];

const menuItems2 = [
  {
    title: "Visitors",
    icon: "Visitors",
    path: '/visitors'
  },
];

export default function Leftbar() {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const dashboards = menuItems.map((item, index)=>(
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

  const charts = menuItems2.map((item, index)=>(
    <Link to={item.path}>
      <div className={`leftbar-item ${activeItem === index ? 'active2' : ''}`} 
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
      <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#ffffff] font-semibold"><FontAwesomeIcon icon={faRocket}/> Dashboards</p>
        {dashboards}
        <p className="p-[5px] my-[5px] text-sm ml-[5px] text-[#ffffff] font-semibold"><FontAwesomeIcon icon={faChartSimple} /> Charts</p>
        {charts}
        
    </div>
  )
}
