import React, { useMemo, useState } from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/Button/MyButton';






function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'f', body: 'a' },
    { id: 2, title: 'b', body: 'h' },
    { id: 3, title: 'c', body: 'q' }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })


const [modal,setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('Есть контакт')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])




  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }




  return (
    <div className="App">
      <MyButton style={{marginTop:'30px'}} onClick={()=>{setModal(true)}}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal} ><PostForm createPost={createPost} /></MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Posts line 1'} />
    </div>
  );
}

export default App;
