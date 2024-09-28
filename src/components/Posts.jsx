import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTags, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      const response = await fetch('https://dummyjson.com/posts?limit=5');
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='posts-wrapper flex flex-col text-center w-[700px] mx-[auto] my-[10px] text-white'>
      <h1 className='text-3xl my-[20px]'>Posts</h1>
      <ul className=''>
        {posts.map((post)=>(
          <li key={post.id} className='my-[40px] bg-[#171717] p-[40px] rounded-lg'>
            <h2 className='text-2xl font-bold mb-[20px]'>{post.title}</h2>
            <p className='font-semibold'>{post.body}</p>
            <div className='inline-flex my-[5px]'>
                <p className='mx-[10px]'><FontAwesomeIcon icon={faThumbsUp}/> : {post.reactions.likes}</p>
                <p className='mx-[10px]'><FontAwesomeIcon icon={faThumbsDown} /> : {post.reactions.dislikes}</p>
                <p className='mx-[10px]'><FontAwesomeIcon icon={faEye} /> : {post.views}</p>
            </div>
            <p><FontAwesomeIcon icon={faTags} /> : {post.tags}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
