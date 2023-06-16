import React, { useEffect, useMemo, useRef, useState } from 'react';
import './../App.css';
import PostList from './../components/PostList/PostList';
import PostForm from './../components/PostForm/PostForm';
import PostFilter from './../components/PostFilter/PostFilter';
import MyModal from './../components/UI/Modal/MyModal';
import MyButton from './../components/UI/Button/MyButton';

import { usePosts } from './../hooks/usePost';
import PostService from './../API/postsService';

import Preloader from './../components/Preloader/Preloader';
import { useFatching } from './../hooks/useFetching';
import { getPagesArray, getPagesCount } from './../utils/pages';
import Paginator from './../components/UI/Pagination/Paginator';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../components/UI/Select/MySelect';





function Posts() {
    let [posts, setPosts] = useState([
        { id: 1, title: 'f', body: 'a' },
        { id: 2, title: 'b', body: 'h' },
        { id: 3, title: 'c', body: 'q' }
    ])
    let [filter, setFilter] = useState({ sort: '', query: '' })
    let [modal, setModal] = useState(false);
    let [totalPages, setTotalPages] = useState(0);
    let [limit, setLimit] = useState(10);
    let [page, setPage] = useState(1);
    //
    let lastElement = useRef();
    //
    let pagesArray = getPagesArray(totalPages)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    let [fetchPosts, isPostLoading] = useFatching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit))
    })



    useEffect(() => {
        fetchPosts(limit, page)
    }, [page,limit]);
    //
    // const observer = useRef();


//////////////////////////////////////////////////////////////////////////////////////////
    // useEffect(() => {
    //     if (isPostLoading) { return };
    //     if (observer.current) { observer.current.disconnect() };
    //     var callback = function (entries, observer) {
    //         if (entries[0].isIntersecting && page < totalPages) {
    //             setPage(page++)
    //         }
    //     };
    //     observer.current = new IntersectionObserver(callback);
    //     observer.current.observe(lastElement.current)
    // }, [isPostLoading])
////////////////////////////////////////////////////////////////////////////////////////////////
useObserver(lastElement,page<totalPages,isPostLoading,()=>{setPage(page++)})

////////////////////////////////////////////////////////////////////////////////////////////////
    // useObserver(lastElement,page<totalPages,isPostLoading,()=>{setPage(page++)})
    // выше пример бесконечного скролинга данные подгружаются когда долистываешь до какого-то элемента, который спрятан или виден для юзера . если что используй ссылку (https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">
            <MyButton style={{ marginTop: '30px' }} onClick={() => { setModal(true) }}>Create post</MyButton>
            <MyModal visible={modal} setVisible={setModal} ><PostForm createPost={createPost} /></MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <div>
            <MySelect
            value={limit}
            onChange={value=>setLimit(value)}
            defaultValue={'Count elements in page'}
            options={[
                {value: 5,name:'5'},
                {value: 10,name:'10'},
                {value: -1,name:'Show all'}
            ]}/>
            </div>
            <div>
                {isPostLoading && <Preloader />}
                <PostList removePost={removePost} posts={sortedAndSearchedPosts} title={'Posts line 1'} />
                <div ref={lastElement} style={{ height: '20px'}}></div>
            </div>
            <Paginator page={page} changePage={changePage} totalPage={totalPages} />
        </div>
    );
}

export default Posts;
