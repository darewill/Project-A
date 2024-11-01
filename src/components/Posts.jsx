import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTags, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../style/Posts.css';
import { Button } from "@/components/ui/button";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 5;

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
      const data = await response.json();
      setPosts(prevPost => [...prevPost, ...data.posts]);
    };
    fetchPosts();
  }, [skip]);

  const loadMore = () =>{
    setSkip(prevSkip => prevSkip + limit);
  };


  return (
    <div className='posts-wrapper flex flex-col text-center w-[700px] mx-[auto] my-[10px] text-[#404040]'>
      <h1 className='text-3xl my-[20px] '>Posts</h1>
      <ul className=''>
        {posts.map((post)=>(
          <li key={post.id} className='my-[40px] bg-white p-[40px] rounded-lg'>
            <h2 className='text-2xl font-bold mb-[20px] capitalize'>{post.title}</h2>
            <p className='font-semibold'>{post.body}</p>
            <hr className='m-[20px]'/>
            <div className='inline-flex my-[5px]'>
                <p className='mx-[10px]'><FontAwesomeIcon icon={faThumbsUp}/> : {post.reactions.likes}</p>
                <p className='mx-[10px]'><FontAwesomeIcon icon={faThumbsDown} /> : {post.reactions.dislikes}</p>
                <p className='mx-[10px]'><FontAwesomeIcon icon={faEye} /> : {post.views}</p>
            </div>
            <p><FontAwesomeIcon icon={faTags} /> : {post.tags}</p>
          </li>
        ))}
      </ul>
        <Button variant="secondary" className='flex m-[auto] mb-[40px] bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 h-9 px-4 py-2' onClick={loadMore}>Load More</Button>
      </div>
  )
}
