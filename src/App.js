import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/Button/MyButton';

import { usePosts } from './hooks/usePost';
import axios from 'axios';
import PostService from './API/postsService';

import Preloader from './components/Preloader/Preloader';
import { useFatching } from './hooks/useFetching';
import { getPagesArray, getPagesCount } from './utils/pages';
import Paginator from './components/UI/Pagination/Paginator';





function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'f', body: 'a' },
    { id: 2, title: 'b', body: 'h' },
    { id: 3, title: 'c', body: 'q' }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading] = useFatching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit))
  })



  useEffect(() => {
    fetchPosts()
  }, [page])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

const changePage = (page)=>{
setPage(page)
}


  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => { setModal(true) }}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal} ><PostForm createPost={createPost} /></MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Paginator page={page} changePage={changePage} totalPage={totalPages}/>
      <div>
        {isPostLoading ? <Preloader /> : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Posts line 1'} />}
      </div>


    </div>
  );
}

export default App;
