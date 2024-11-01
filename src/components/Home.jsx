import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import Leftbar from './Leftbar';

export default function Home() {

  return (
    <div className="home-wrapper flex justify-center mt-[40px] mr-[10px] ml-[10px]">
      <div className="home-tabs bg-white m-[15px] h-[100%] w-[15%] rounded-md"><Leftbar /></div>
      <div className="home- bg-white m-[15px] w-[85%] h-[730px] rounded-md">display</div>
    </div>
  )
}
