import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';
import Leftbar from './Leftbar';
import { Invoice } from './Invoice';

export default function Home() {

  return (
    <div className="home-wrapper ">
      <h1>This is the homepage</h1>
    </div>
  )
}
