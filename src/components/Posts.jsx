import React, {useState, useEffect} from 'react';

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
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div>
                <p>Likes: {post.reactions.likes}</p>
                <p>Dislikes: {post.reactions.dislikes}</p>
                <p>Views: {post.views}</p>
            </div>
            <p>Tags: {post.tags}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
