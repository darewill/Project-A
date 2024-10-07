import React, {useState, useEffect} from 'react';
import '../style/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

export default function Home() {
  const [toDos, setToDos] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5;
  
  
  useEffect(() => {
    const fetchToDos = async () => {
      const response = await fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setToDos(prevToDo => [...prevToDo, ...data.todos]);
    };
    fetchToDos();
  }, [skip]);

  const loadMore = () => {
    setSkip(prevSkip => prevSkip + limit);
  };

  return (
    <>
    <h2 className='text-4xl flex justify-center text-[#e6e6e6] m-[20px] font-bold'>Here's your to do list:</h2>
    {
      toDos.map((toDo) => (
        <ul className=''>
          <li key={toDo.id} className='flex flex-col text-center mb-[10px] text-[#d4d3d3]'>
            <h2>{toDo.todo}</h2>
            <h3>{toDo.completed ? <p className='finished'><FontAwesomeIcon icon={faCheck} /></p> : <p className='notFinished'><FontAwesomeIcon icon={faX} /></p>}
            </h3>
          </li>
        </ul>
      ))
    }
  
    <Button variant="secondary" className='flex m-[auto] mb-[40px] bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2' onClick={loadMore}>Show More</Button>
    </>
  )
}
