import React, { useRef, useState } from 'react';
import MyButton from '../UI/Button/MyButton';
import MyInput from '../UI/Input/MyInput';


const PostForm = ({ createPost }) => {
    const [post, setPost] = useState({ title: '', body: '' })



    const addPost = (e) => {
        e.preventDefault()
        const newPost = { ...post, id: Date.now() }
        createPost(newPost)
        setPost({ title: '', body: '' })
    }


    return (
        <form >
            <MyInput value={post.title} onChange={(e) => { setPost({ ...post, title: e.target.value }) }} type='text' placeholder='Название поста' />
            <MyInput value={post.body} onChange={(e) => { setPost({ ...post, body: e.target.value }) }} type='text' placeholder='Описание поста' />
            <MyButton onClick={addPost} >Создать пост</MyButton>
        </form>
    );
}

export default PostForm;