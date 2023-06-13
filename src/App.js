import React, { useRef, useState } from 'react';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/Input/MyInput';
import './App.css';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
function App() {
  const [posts,setPosts] = useState([
    {id:1,title:'JavaScript 1',body:'Description'},
    {id:2,title:'JavaScript 2',body:'Description'},
    {id:3,title:'JavaScript 3',body:'Description'}
  ])

  const createPost =(newPost)=>{
    setPosts([...posts,newPost])
  }

  const removePost = (post)=>{
    setPosts(posts.filter(p=>p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm createPost={createPost}/>
      <PostList removePost={removePost} posts={posts} title={'Posts line 1'}/>
    </div>
  );
}

export default App;
