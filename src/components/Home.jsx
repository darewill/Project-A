import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

export default function Home() {

  return (
    <div className="home-wrapper flex justify-center mt-[40px] mr-[10px] ml-[10px]">
      <div className="home-tabs bg-[#7e7e7e42] m-[15px] h-[400px] w-[15%]">tabs</div>
      <div className="home- bg-[#7e7e7e42] m-[15px] w-[85%] h-[730px]">display</div>
    </div>
  )
}
